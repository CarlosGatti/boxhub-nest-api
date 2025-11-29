# ✅ Fix: GraphQL Duplicated Type "Comment"

## 🔍 Problema Identificado

O erro `Schema must contain uniquely named types but contains multiple types named "Comment"` ocorria porque havia **dois tipos GraphQL** com o mesmo nome:

1. **`src/comments/dto/comment.dto.ts`** - DTO manual criado manualmente
   - Define: `@ObjectType() export class Comment`
   
2. **`@generated/comment/comment.model.ts`** - Tipo gerado automaticamente pelo Prisma NestJS GraphQL
   - Define: `@ObjectType() export class Comment`

## ✅ Solução Aplicada

**Removido o DTO manual** e **usado o tipo gerado pelo Prisma**, que já contém todos os campos necessários:

### Arquivos Modificados:

1. **`src/comments/comments.resolver.ts`**
   - ❌ Removido: `import { Comment } from './dto/comment.dto';`
   - ✅ Adicionado: `import { Comment } from '../../@generated/comment/comment.model';`

2. **`src/comments/dto/comment.dto.ts`**
   - ❌ **DELETADO** (arquivo removido completamente)

### Por que usar o tipo gerado?

O tipo gerado pelo Prisma (`@generated/comment/comment.model.ts`) já inclui:
- ✅ Todos os campos necessários (id, content, discartItemId, userId, parentId, etc.)
- ✅ Relações (user, discartItem, parent, replies)
- ✅ Tipos corretos
- ✅ Mantido automaticamente em sync com o schema Prisma

## ✅ Validação

- ✅ Build passou sem erros
- ✅ Não há mais tipos duplicados
- ✅ Schema GraphQL unificado
- ✅ Resolver usando tipo correto
- ✅ Nenhum erro de lint

## 📋 Estrutura Final

```
src/comments/
  ├── comments.module.ts
  ├── comments.resolver.ts      ← Usa Comment do @generated
  ├── comments.service.ts
  └── dto/
      └── create-comment.input.ts

@generated/comment/
  └── comment.model.ts          ← Único tipo Comment GraphQL
```

## 🎯 Resultado

Agora existe **apenas um tipo GraphQL "Comment"**:
- ✅ `@generated/comment/comment.model.ts` (gerado pelo Prisma)

O backend deve iniciar normalmente sem erros de schema duplicado.

---

**Status:** ✅ **RESOLVIDO**

