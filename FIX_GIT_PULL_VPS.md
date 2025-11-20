# Como Resolver o Erro de Git Pull na VPS

## Erro
```
error: The following untracked working tree files would be overwritten by merge:
	prisma/migrations/20251119001739_baseline/migration.sql
Please move or remove them before you merge.
Aborting
```

## Solução (Escolha uma das opções)

### Opção 1: Remover o arquivo local (Recomendado)

O arquivo já existe no repositório remoto, então podemos remover o local:

```bash
# Na VPS
cd /var/www/khub

# Fazer backup do arquivo (caso precise depois)
cp prisma/migrations/20251119001739_baseline/migration.sql \
   prisma/migrations/20251119001739_baseline/migration.sql.backup

# Remover o arquivo local
rm prisma/migrations/20251119001739_baseline/migration.sql

# Agora fazer o pull
git pull origin main
```

### Opção 2: Adicionar o arquivo ao Git (se houver diferenças)

Se você modificou o arquivo localmente e quer preservar as mudanças:

```bash
# Na VPS
cd /var/www/khub

# Verificar se há diferenças (comparar com remoto)
git fetch origin main
git diff HEAD origin/main -- prisma/migrations/20251119001739_baseline/migration.sql

# Se houver diferenças importantes, adicionar e commitar
git add prisma/migrations/20251119001739_baseline/migration.sql
git commit -m "Add migration file"

# Se não houver diferenças importantes, usar Opção 1
```

### Opção 3: Stash temporário

```bash
# Na VPS
cd /var/www/khub

# Adicionar ao stash
git stash push -u prisma/migrations/20251119001739_baseline/migration.sql

# Fazer pull
git pull origin main

# Se precisar do arquivo depois, pode aplicar o stash
# git stash pop
```

## Após Resolver o Pull

Depois de fazer o pull com sucesso, continuar com o deploy:

```bash
# Rebuild do projeto
npm run build

# Reiniciar PM2
pm2 restart khub

# Verificar logs
pm2 logs khub --lines 50
```

## Por Que Isso Aconteceu?

Isso geralmente acontece quando:
- Um arquivo foi criado localmente na VPS
- O mesmo arquivo foi adicionado ao repositório por outro desenvolvedor/máquina
- O Git detecta conflito entre o arquivo local não rastreado e o arquivo do repositório remoto

**Solução:** Use a **Opção 1** na maioria dos casos, pois o arquivo já está no repositório.

