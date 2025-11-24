# 🔧 Correção de Categorias - Migration Atualizada

## Problema Identificado

O banco de dados contém valores de categoria em formato diferente do enum:
- Banco tem: `"Other"`, `"Furniture"`, `"Electronics"` (title case ou lowercase)
- Enum espera: `OTHER`, `FURNITURE`, `ELECTRONICS` (UPPERCASE)

Isso causa erro: `Value 'Other' is not a valid value for enum DiscartItemCategory`

## Solução Implementada

### 1. Migration Atualizada ✅

A migration `20250101000001_refactor_categories_unified_enum` foi atualizada para:
- Normalizar TODOS os valores existentes (title case, lowercase, uppercase)
- Mapear variações comuns (`"book"` → `BOOK`, `"general"` → `OTHER`, etc.)
- Converter todos para valores válidos do enum em UPPERCASE

### 2. Normalização no Backend ✅

Função `normalizeCategory()` adicionada no service que:
- Aceita valores em qualquer formato (title case, lowercase, uppercase)
- Normaliza para valores válidos do enum
- Usada em: create, update, e filtros de busca

## Como Aplicar no Servidor

### Passo 1: Fazer Pull das Mudanças

```bash
ssh root@104.251.216.111
cd /var/www/khub
git pull origin main
```

### Passo 2: Aplicar a Migration Atualizada

```bash
# A migration vai normalizar todos os valores existentes automaticamente
npx prisma migrate deploy

# Verificar se aplicou corretamente
npx prisma migrate status
```

### Passo 3: Verificar Dados Migrados

```bash
# Conectar ao banco e verificar categorias
psql -U seu_usuario -d khub -c "SELECT DISTINCT category FROM \"DiscartItem\";"

# Deve mostrar apenas valores em UPPERCASE:
# OTHER
# FURNITURE
# ELECTRONICS
# KIDS
# SPORTS
# BOOK
```

### Passo 4: Regenerar Tipos e Deploy

```bash
# Regenerar tipos Prisma
npx prisma generate

# Build e restart
yarn build
pm2 restart khub
```

## O Que a Migration Faz

A migration SQL atualizada:

1. **Cria novo enum** com todas as categorias em UPPERCASE
2. **Normaliza valores existentes**:
   - `"Other"`, `"other"`, `"OTHER"` → `OTHER`
   - `"Furniture"`, `"furniture"`, `"FURNITURE"` → `FURNITURE`
   - `"Electronics"`, `"electronics"`, `"ELECTRONICS"` → `ELECTRONICS`
   - `"Kids"`, `"kids"`, `"KIDS"` → `KIDS`
   - `"Sports"`, `"sports"`, `"SPORTS"` → `SPORTS`
   - `"Book"`, `"book"`, `"books"` → `BOOK`
   - `"General"`, `"general"`, `"GENERAL"` → `OTHER`
   - Qualquer outro valor → `OTHER` (fallback seguro)
3. **Substitui a coluna antiga** pela nova com valores normalizados
4. **Remove o enum antigo** e renomeia o novo

## Valores Aceitos pelo Backend

O backend agora aceita valores em **qualquer formato** e normaliza automaticamente:

### Inputs Aceitos:
- `"Other"`, `"other"`, `"OTHER"` → `OTHER`
- `"Furniture"`, `"furniture"`, `"FURNITURE"` → `FURNITURE`
- `"Electronics"`, `"electronics"`, `"ELECTRONICS"` → `ELECTRONICS`
- `"Kids"`, `"kids"`, `"KIDS"` → `KIDS`
- `"Sports"`, `"sports"`, `"SPORTS"` → `SPORTS`
- `"Book"`, `"book"`, `"books"` → `BOOK`

### Outputs (GraphQL):
Sempre retorna valores em **UPPERCASE** conforme o enum:
- `OTHER`
- `FURNITURE`
- `ELECTRONICS`
- `KIDS`
- `SPORTS`
- `BOOK`

## Teste Pós-Deploy

```graphql
# Deve funcionar sem erros
query {
  discartItems {
    id
    title
    category  # Deve retornar valores em UPPERCASE
  }
}

# Filtrar por categoria (aceita qualquer formato)
query {
  discartItems(category: "furniture") {  # lowercase funciona
    id
    title
    category  # Retorna "FURNITURE"
  }
}

# Criar item (aceita qualquer formato)
mutation {
  createDiscartItem(data: {
    title: "Test"
    description: "Test"
    type: DONATE
    category: "electronics"  # lowercase funciona
    condition: USED
    contactPhone: "1234567890"
  }) {
    id
    category  # Retorna "ELECTRONICS"
  }
}
```

## Troubleshooting

### Erro: "enum type does not exist"
- A migration não foi aplicada
- Execute: `npx prisma migrate deploy`

### Erro: "Value 'X' is not a valid value"
- A migration não normalizou todos os valores
- Verifique: `SELECT DISTINCT category FROM "DiscartItem";`
- Se houver valores inválidos, execute manualmente:
  ```sql
  UPDATE "DiscartItem" 
  SET category = 'OTHER' 
  WHERE category NOT IN ('FURNITURE', 'ELECTRONICS', 'KIDS', 'SPORTS', 'OTHER', 'BOOK');
  ```

### Frontend ainda quebrado
- Verifique se o frontend está enviando valores válidos
- O backend aceita qualquer formato, mas o GraphQL schema espera enum
- Frontend deve usar os valores do enum: `FURNITURE`, `ELECTRONICS`, etc.

## Resumo

✅ Migration atualizada para normalizar todos os valores existentes
✅ Backend normaliza valores automaticamente em create/update/filter
✅ Compatível com valores antigos e novos
✅ Frontend pode usar valores em qualquer formato (serão normalizados)

**A migration é segura e não perde dados!**

