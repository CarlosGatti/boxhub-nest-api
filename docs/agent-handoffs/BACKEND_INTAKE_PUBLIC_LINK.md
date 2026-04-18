# Handoff: Intake publico por link (token) - agente backend

## Como usar no Cursor (backend repo)

1. Copia este ficheiro para o monorepo da API (ex.: `docs/agent-handoffs/`) **ou** abre-o lado a lado.
2. No chat do Cursor (modo Agent), cola o **prompt curto** abaixo e anexa/referencia este ficheiro com `@BACKEND_INTAKE_PUBLIC_LINK.md` (ou arrasta o ficheiro para o contexto).

### Prompt curto (colar no agente)

```text
Implementa o fluxo de intake publico por token conforme o documento BACKEND_INTAKE_PUBLIC_LINK.md.
Requisitos: nao quebrar resolvers/services existentes do modulo defined; seguir padroes atuais (DefinedService, DTOs, Prisma); apenas mudancas additive na schema; expor leitura + submit por shareToken sem RequireApp DEFINED; reutilizar logica de submitIntakeForm.
Antes de codar, localiza defined.resolver.ts, defined.service.ts e o modelo Prisma DefinedIntakeForm. No fim, lista operacoes GraphQL novas e como testar regressao.
```

---

Use este documento como **briefing unico** para implementar o fluxo em que o **cliente final** preenche um intake **sem login**, via URL segura (ex.: email com link). O site `defined-website` ja consome a API Defined; o front depois acrescentara "Copiar link" / "Enviar email" quando estes contratos existirem.

---

## Objetivos

1. **Nao quebrar** clientes, queries, mutations nem fluxos existentes de `DefinedIntakeForm` (backoffice autenticado).
2. Estender a API **seguindo padroes ja usados** no mesmo monorepo: modulo `defined`, `DefinedService`, resolvers com `@RequireApp('DEFINED')` onde fizer sentido, DTOs com `class-validator`, Prisma.
3. Permitir **uma rota de leitura + submissao publica** identificada por **token opaco** (nao adivinhavel), com regras claras de **quando** o formulario pode ser visto e enviado.

---

## Fora de escopo (por agora)

- Envio de email (Resend/SMTP): pode ser **fase 2**; basta expor o **link canonico** ou o **token** para o backoffice copiar.
- Alterar o modelo de auth global: usar **token no intake**, nao misturar com JWT de cliente externo salvo em `User` salvo requisito explicito.

---

## Compatibilidade (obrigatorio)

- **Migrations additive**: novos campos/tabelas com defaults ou nullable onde possivel; nunca remover colunas usadas em producao sem migracao de dados.
- **Resolvers existentes** (`definedIntakeForm`, `submitDefinedIntakeForm`, etc.) mantem assinatura e comportamento para chamadas atuais; novas operacoes entram com **nomes novos** (ex.: `definedIntakeFormByShareToken`) ou campos opcionais **aditivos** nos tipos GraphQL.
- **Submit autenticado** atual continua valido para staff; o submit **por token** pode reutilizar a mesma logica de negocio no **service** (`DefinedService.submitIntakeForm`), extraindo validacoes para metodos privados compartilhados para evitar duplicacao.

---

## Referencias no proprio backend (obrigatorio ler antes)

O agente deve localizar e espelhar estes padroes (caminhos exemplificativos - ajustar ao repo real):

| Area | O que espelhar |
|------|------------------|
| Resolver Defined | `src/apps/defined/defined.resolver.ts` - guards, args, tipos de retorno |
| Service | `src/apps/defined/defined.service.ts` - transacoes, `submitIntakeForm`, `markIntakeFormReviewed`, `getIntakeForm` |
| DTOs | `src/apps/defined/dto/*.input.ts` - `SubmitDefinedIntakeFormInput`, validacoes |
| Prisma | `schema.prisma` - modelo `DefinedIntakeForm`, relacao com `DefinedIntakeAnswer` |
| GraphQL models | `@generated/defined-intake-form/defined-intake-form.model.ts` e analogos |

**Regra:** novos tipos GraphQL (`ObjectType` / `InputType`) seguem a mesma pasta e convencoes dos existentes.

---

## Modelo de dados sugerido (Prisma)

Implementacao minima **additive** (ajustar nomes ao estilo do schema atual):

### Opcao A - campos no `DefinedIntakeForm` (simples)

- `shareToken` - `String?` `@unique` - token opaco (ex.: 32+ bytes em base64url ou UUID v4 sem expor id sequencial).
- `shareTokenCreatedAt` - `DateTime?` - auditoria.
- `shareTokenExpiresAt` - `DateTime?` - opcional; se `null`, politica de expiracao fica so na aplicacao ou "sem expiracao ate submit".
- `shareRevokedAt` - `DateTime?` - invalidar link sem apagar o form.

Indices: unique em `shareToken` onde nao for null.

### Opcao B - tabela `DefinedIntakeFormShare` (se quiseres historico de links)

- `id`, `intakeFormId`, `token`, `createdAt`, `expiresAt`, `revokedAt`, opcionalmente `createdByUserId`.
- Mais flexivel para **reenviar** = novo token, antigo revogado.

**Escolha:** preferir **Opcao A** para MVP se o produto so precisa de **um link ativo** por formulario; **Opcao B** se quiseres multiplos links e auditoria fina.

---

## Regras de negocio (definir no service)

1. **Gerar token:** so utilizadores com acesso ja existente ao app DEFINED (mesma regra que `createIntakeForm` / update), via mutation dedicada ou ao criar/atualizar intake (ver secao API).
2. **Ler formulario por token:** retornar dados necessarios para o front publico: metadados do form (tipo, titulo), **template de perguntas** (mesma fonte que `definedIntakeTemplate`), **sem** expor dados internos desnecessarios (ex.: notas internas, ids internos se nao forem precisos).
3. **Submeter por token:** permitir apenas se:
   - token valido e nao revogado;
   - nao expirado (se usares expiracao);
   - `status` permitir submissao (ex.: `DRAFT` ou `SENT` - alinhar ao enum `DefinedIntakeFormStatus` existente; nao permitir se ja `SUBMITTED` / `REVIEWED` conforme politica);
   - mesmas regras de negocio ja usadas em `submitIntakeForm` (ex.: projeto `ARCHIVED`).
4. **Idempotencia:** segundo submit com o mesmo token deve falhar com erro claro se o form ja estiver submetido.

---

## API GraphQL (proposta - ajustar nomenclatura ao projeto)

### Mutations (staff / autenticadas - `@RequireApp('DEFINED')`)

- `generateDefinedIntakeShareLink(intakeFormId: Int!): DefinedIntakeForm`  
  - Gera ou regera `shareToken`, atualiza timestamps; retorna o form (ou um tipo payload com `token` + `urlBase` opcional - **evitar** hardcode de dominio no backend; o front monta a URL).

**OU** campos opcionais na mutation de update ja existente, se preferirem nao criar mutation nova - desde que seja **estritamente additive**.

### Queries / mutations publicas (sem `RequireApp`, com validacao por token)

**Importante:** nao expor o mesmo resolver que lista todos os forms. Criar operacoes **dedicadas**:

- `definedIntakeFormForRespondent(token: String!): DefinedIntakeRespondentView` (tipo novo, fino)  
  - Inclui: id tecnico minimo ou nenhum; `formType`, `title`, `status`, perguntas/template, respostas ja guardadas se permitido (modo rascunho - so se existir requisito; senao omitir).

- `submitDefinedIntakeFormByShareToken(input: SubmitDefinedIntakeFormByShareTokenInput!): DefinedIntakeForm`  
  - `input`: `token`, `answers` (mesma estrutura que `SubmitDefinedIntakeFormInput.answers` - reutilizar `DefinedIntakeAnswerInput` ou extrair tipo partilhado).

**Seguranca GraphQL:**

- Estes campos devem estar **sem** o guard de app DEFINED; em alternativa, usar **API REST** num controller Nest com rate limiting - se o monorepo ja tiver padrao para "public endpoints", seguir esse padrao em vez de inventar.
- Considerar **rate limit** por IP no submit (middleware ou guard Nest) para reduzir abuso.

---

## Integracao com o front `defined-website` (contrato)

- URL publica sugerida no site: `/[locale]/forms/intake/[token]` ou `/[locale]/i/[token]` - **fora** de `/defined` (layout autenticado).
- O front chamara a API com `token` na variavel; base URL e CORS ja assumidos pelo monorepo.

Documentar no final do PR:

- Nomes exatos das operacoes GraphQL.
- Exemplo de variaveis para `submit`.
- Se o token deve ir no **path** so no front ou tambem e aceite como header - padrao: **variavel GraphQL** ou body JSON.

---

## Ordem de implementacao sugerida

1. Migration Prisma (campos/tabela) + `prisma generate`.
2. Metodos no `DefinedService`: `generateShareToken`, `getIntakeFormByShareToken`, `submitIntakeFormByShareToken` (delegando logica comum a metodos privados com `submitIntakeForm`).
3. DTOs + validacao.
4. Tipos GraphQL novos (se necessario) + resolver(es).
5. Testes manuais: form antigo continua a funcionar; novo fluxo token end-to-end.
6. Documentar no README do modulo Defined ou neste ficheiro (secao "Implementado").

---

## Testes de regressao (obrigatorio antes de merge)

- [ ] `definedIntakeForm(id)` staff inalterado.
- [ ] `submitDefinedIntakeForm` staff inalterado para casos ja usados.
- [ ] `createDefinedIntakeForm` / listagens existentes.
- [ ] Form sem token: query publica falha com mensagem clara.
- [ ] Token revogado / expirado: comportamento definido.
- [ ] Submit duplicado bloqueado conforme politica.

---

## Nota para o agente Cursor (backend)

1. Abrir o modulo `defined` e **copiar o estilo** de imports, tratamento de erros (`NotFoundException`, `BadRequestException`) e transacoes Prisma ja usados em `submitIntakeForm`.
2. **Nao** duplicar a logica de escrita de `DefinedIntakeAnswer` - extrair funcao interna se necessario.
3. Apos alterar schema, correr migration em ambiente de dev e confirmar que **apps que nao usam token** nao sao afetados (campos nullable).
4. Se existir **GraphQL Playground** ou testes e2e no repo, atualizar ou adicionar um exemplo minimo.

---

## Secao "Implementado" (preencher no PR)

| Item | Decisao final |
|------|----------------|
| Opcao Prisma (A/B) | |
| Nomes exatos das operacoes | |
| Politica de expiracao | |
| Status permitidos para submit publico | |

---

*Documento gerado para handoff entre repositorios da mesma empresa; manter atualizado quando a API estabilizar.*
