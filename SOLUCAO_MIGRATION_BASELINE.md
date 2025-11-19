# 🔧 Solução: Migration Baseline Já Aplicada

> **Problema:** Migration `20251119001739_baseline` tentando criar tipos que já existem no banco.

---

## ❌ Erro

```
Error: P3018
A migration failed to apply. New migrations cannot be applied before the error is recovered from.

Migration name: 20251119001739_baseline

Database error:
ERROR: type "LogAction" already exists
```

**Causa:** O banco de dados já tem os tipos/tabelas criados, mas a migration ainda não foi marcada como aplicada.

---

## ✅ Solução: Marcar Migration como Aplicada

### Opção 1: Via Script de Deploy (Automático)

O script de deploy agora tenta marcar a migration como aplicada automaticamente se houver erro. Faça push:

```bash
git add .
git commit -m "Fix deploy: handle baseline migration already applied"
git push
```

### Opção 2: Manual na VPS (Se a Opção 1 não funcionar)

**1. Conectar na VPS:**

```bash
ssh root@104.237.3.199
```

**2. Ir para o diretório da aplicação:**

```bash
cd /home/boxhub/boxhub-api
```

**3. Marcar migration como aplicada:**

```bash
npx prisma migrate resolve --applied 20251119001739_baseline
```

**4. Verificar se funcionou:**

```bash
npx prisma migrate status
```

**5. Se ainda houver problemas, aplicar migrations pendentes:**

```bash
npx prisma migrate deploy
```

---

## 📝 Explicação

O banco de dados já foi criado manualmente antes, então os tipos ENUM e tabelas já existem. A migration `20251119001739_baseline` tenta criar tudo do zero, mas como já existe, dá erro.

A solução é marcar essa migration como "aplicada" sem executar o SQL, porque o schema já está no banco.

---

## ✅ Depois de Resolver

**Faça push do código atualizado:**

```bash
git add .
git commit -m "Fix deploy: handle baseline migration already applied"
git push
```

**O próximo deploy deve funcionar!**

---

**🚀 O deploy deve funcionar após marcar a migration como aplicada!**

