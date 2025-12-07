# 🚀 Configuração do GitHub Actions para Deploy Automático

## 📋 Status Atual

**❌ GitHub Actions NÃO está configurado ainda.**

O deploy atual é feito manualmente via SSH usando o script `deploy-vps.sh`.

## ✅ O Que Foi Criado

Criei um workflow do GitHub Actions em `.github/workflows/deploy.yml` que:

1. ✅ Faz checkout do código
2. ✅ Instala dependências
3. ✅ Faz build do projeto
4. ✅ Conecta ao servidor VPS via SSH
5. ✅ Executa o deploy (pull, build, migrations, restart PM2)
6. ✅ Verifica se o deploy foi bem-sucedido

## 🔧 Configuração Necessária no GitHub

Para o GitHub Actions funcionar, você precisa adicionar os seguintes **Secrets** no repositório:

### 1. Ir para Settings do Repositório

1. Acesse: `https://github.com/CarlosGatti/boxhub-nest-api/settings/secrets/actions`
2. Clique em "New repository secret"

### 2. Adicionar os Secrets:

#### `VPS_HOST`
```
104.251.216.111
```

#### `VPS_USER`
```
root
```

#### `VPS_SSH_KEY`
A chave SSH privada que permite acesso ao servidor.

**Como obter a chave SSH:**
```bash
# No seu computador local
cat ~/.ssh/id_rsa
# ou
cat ~/.ssh/id_ed25519
```

**⚠️ IMPORTANTE:** Se você não tem uma chave SSH configurada, precisa criar uma:

```bash
# Gerar nova chave SSH (se não tiver)
ssh-keygen -t ed25519 -C "github-actions"

# Copiar chave pública para o servidor
ssh-copy-id root@104.251.216.111

# Copiar chave privada para usar no GitHub Secrets
cat ~/.ssh/id_ed25519
```

## 📝 Como Funciona

### Deploy Automático

Toda vez que você fizer `git push origin main`, o GitHub Actions vai:

1. ✅ Fazer build do projeto
2. ✅ Conectar ao servidor VPS
3. ✅ Fazer `git pull` no servidor
4. ✅ Instalar dependências
5. ✅ Fazer build
6. ✅ Rodar migrations do Prisma
7. ✅ Rodar seed dos apps
8. ✅ Rodar backfill de usuários
9. ✅ Reiniciar PM2
10. ✅ Verificar se está funcionando

### Deploy Manual

Você também pode executar o workflow manualmente:

1. Vá para a aba "Actions" no GitHub
2. Selecione "Deploy to VPS"
3. Clique em "Run workflow"

## 🔍 Verificar se Está Funcionando

Após configurar os secrets e fazer um push:

1. Vá para: `https://github.com/CarlosGatti/boxhub-nest-api/actions`
2. Você deve ver o workflow rodando
3. Clique no workflow para ver os logs detalhados

## ⚠️ Troubleshooting

### Se o deploy falhar:

1. **Verificar logs do GitHub Actions:**
   - Vá para a aba "Actions"
   - Clique no workflow que falhou
   - Veja os logs para identificar o erro

2. **Verificar conexão SSH:**
   - Teste manualmente: `ssh root@104.251.216.111`
   - Verifique se a chave SSH está correta

3. **Verificar permissões no servidor:**
   - O usuário precisa ter permissão para executar os comandos
   - Verificar se o diretório existe: `/home/boxhub/boxhub-api` ou `/var/www/khub`

## 🎯 Próximos Passos

1. ✅ Adicionar os secrets no GitHub
2. ✅ Fazer um commit e push para testar
3. ✅ Verificar se o deploy automático funciona
4. ✅ Monitorar os logs do GitHub Actions

---

**Status:** Workflow criado, aguardando configuração dos secrets no GitHub.

