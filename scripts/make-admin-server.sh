#!/bin/bash

# Script para executar no SERVIDOR via SSH
# Uso no servidor: ./scripts/make-admin-server.sh email@exemplo.com

set -e

EMAIL="${1:-}"

if [ -z "$EMAIL" ]; then
  echo "❌ Erro: Email não fornecido"
  echo "Uso: ./scripts/make-admin-server.sh email@exemplo.com"
  exit 1
fi

APP_DIR="/home/boxhub/boxhub-api"

echo "📦 Entrando no diretório da aplicação..."
cd $APP_DIR

# Carregar ambiente Node.js
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" || true
[ -s "$HOME/.bashrc" ] && source "$HOME/.bashrc" || true
[ -s "$HOME/.profile" ] && source "$HOME/.profile" || true
export PATH="$PATH:/usr/bin:/usr/local/bin:$HOME/.local/bin"

# Usar Node 18 se nvm estiver disponível
command -v nvm >/dev/null 2>&1 && nvm use 18 || true

echo "🔍 Procurando usuário com email: $EMAIL"
echo ""

# Executar script Node.js
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const email = '${EMAIL}';
  
  console.log('🔍 Procurando usuário:', email);
  
  const user = await prisma.user.findUnique({
    where: { email },
  });
  
  if (!user) {
    console.error('❌ Usuário não encontrado!');
    console.log('💡 Verifique se o email está correto.');
    process.exit(1);
  }
  
  console.log('✅ Usuário encontrado:');
  console.log('   Nome:', user.firstName, user.lastName);
  console.log('   Email:', user.email);
  console.log('   Status atual - isAdmin:', user.isAdmin);
  
  if (user.isAdmin) {
    console.log('⚠️  Usuário já é admin!');
    process.exit(0);
  }
  
  const updated = await prisma.user.update({
    where: { email },
    data: { isAdmin: true },
  });
  
  console.log('');
  console.log('✅ SUCESSO! Usuário agora é admin!');
  console.log('📊 Novo status - isAdmin:', updated.isAdmin);
  console.log('');
  console.log('🎉 Você pode agora acessar o painel admin!');
}

main()
  .catch((e) => {
    console.error('❌ Erro:', e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.\$disconnect();
  });
"

echo ""
echo "✅ Script concluído!"

