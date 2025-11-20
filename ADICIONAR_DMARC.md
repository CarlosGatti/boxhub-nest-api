# 📧 Como Adicionar Registro TXT `_dmarc` no Cloudflare

## 🔒 O Que é DMARC?

DMARC (Domain-based Message Authentication, Reporting & Conformance) é um protocolo de segurança de email que ajuda a proteger contra:
- ✅ Spam
- ✅ Phishing
- ✅ Email spoofing (falsificação)

## 📋 Adicionar Registro `_dmarc`

### Passo 1: Acessar Cloudflare DNS

1. **Acesse:** Cloudflare Dashboard
2. **Selecione:** discart.me
3. **Vá para:** DNS → Records

### Passo 2: Adicionar Novo Registro

1. **Clique no botão:** "Add record" (botão azul com +)

### Passo 3: Preencher Dados do Registro

**Configuração Recomendada:**

```
Type: TXT
Name: _dmarc
Content: v=DMARC1; p=reject; rua=mailto:postmaster@discart.me
Proxy status: DNS only ⚪ (MANTENHA DESABILITADO!)
TTL: Auto
```

**Ou configuração mais básica:**

```
Type: TXT
Name: _dmarc
Content: v=DMARC1; p=reject
Proxy status: DNS only ⚪
TTL: Auto
```

### Passo 4: Explicação dos Campos

**Type:** `TXT` (já selecionado)

**Name:** `_dmarc` (com underscore no início!)

**Content:** Varia conforme a política desejada:

#### Opção 1: Política Rejeitar (Recomendado)
```
v=DMARC1; p=reject; rua=mailto:postmaster@discart.me
```
- `v=DMARC1` - Versão do protocolo
- `p=reject` - Rejeitar emails que falharem autenticação
- `rua=mailto:postmaster@discart.me` - Email para relatórios

#### Opção 2: Política Quarentena (Menos Restritiva)
```
v=DMARC1; p=quarantine; rua=mailto:postmaster@discart.me
```
- `p=quarantine` - Colocar emails suspeitos em spam

#### Opção 3: Política Nenhuma (Apenas Monitoramento)
```
v=DMARC1; p=none; rua=mailto:postmaster@discart.me
```
- `p=none` - Não fazer nada, apenas monitorar e reportar

#### Opção 4: Básico (Sem Relatórios)
```
v=DMARC1; p=reject
```
- Mais simples, sem emails de relatório

**Proxy status:** **DNS only** ⚪ (NUNCA habilite proxy para registros TXT!)

**TTL:** `Auto` ou `3600` (1 hora)

### Passo 5: Salvar

1. **Clique:** "Save"
2. **Aguarde:** 1-5 minutos para propagação

## 📧 Configurações de DMARC Comuns

### Para Começar (Recomendado)

Use esta configuração se você está começando:

```
v=DMARC1; p=none; rua=mailto:postmaster@discart.me; ruf=mailto:postmaster@discart.me; sp=none; aspf=r;
```

- `p=none` - Não rejeitar (apenas monitorar)
- `rua` - Email para relatórios agregados
- `ruf` - Email para relatórios de falhas
- `sp=none` - Política para subdomínios (nenhuma ação)
- `aspf=r` - Modo ASPF (relaxado)

### Para Produção (Avançado)

Após monitorar por alguns dias/ semanas:

```
v=DMARC1; p=reject; pct=100; rua=mailto:dmarc-reports@discart.me; ruf=mailto:dmarc-failures@discart.me; sp=reject; aspf=s;
```

- `p=reject` - Rejeitar emails que falharem
- `pct=100` - Aplicar a 100% dos emails
- `sp=reject` - Rejeitar em subdomínios também
- `aspf=s` - Modo ASPF (strict)

## ⚠️ IMPORTANTE

### ✅ O Que Está Correto:

- ✅ Type: TXT
- ✅ Name: `_dmarc` (com underscore!)
- ✅ Proxy: **DNS only** ⚪ (SEMPRE desabilitado para TXT!)

### ❌ Erros Comuns:

- ❌ Nome sem underscore (`dmarc` ao invés de `_dmarc`)
- ❌ Proxy habilitado (registros TXT NUNCA devem ter proxy)
- ❌ Tipo errado (A, CNAME, etc. ao invés de TXT)
- ❌ Conteúdo sem aspas quando necessário

## 🧪 Como Verificar se Funcionou

### 1. Verificar no Cloudflare

1. Volte para: DNS → Records
2. Procure pelo registro `_dmarc`
3. Deve aparecer na lista

### 2. Verificar com DNS Lookup

```bash
# Usando dig
dig TXT _dmarc.discart.me

# Ou usando nslookup
nslookup -type=TXT _dmarc.discart.me

# Deve retornar o valor que você configurou
```

### 3. Verificar Online

- Use: https://mxtoolbox.com/dmarc.aspx
- Digite: `discart.me`
- Clique em "DMARC Lookup"
- Deve mostrar o registro configurado

## 📝 Registro Recomendado para Você

**Baseado no que vi antes, use este:**

```
Type: TXT
Name: _dmarc
Content: v=DMARC1; p=reject; rua=mailto:postmaster@discart.me
Proxy status: DNS only ⚪
TTL: Auto
```

Este é o mesmo registro que estava antes. Copie e cole exatamente no Cloudflare!

## 🔗 Links Úteis

- **Gerador DMARC:** https://www.dmarcanalyzer.com/dmarc-record-generator/
- **Validador DMARC:** https://mxtoolbox.com/dmarc.aspx
- **Documentação:** https://dmarc.org/wiki/FAQ

---

**Nota:** Lembre-se que o `_dmarc` é importante para segurança de email, mas não interfere com o backend/API. Se você não usa email com este domínio, pode deixar com uma política mais leve (`p=none`).

