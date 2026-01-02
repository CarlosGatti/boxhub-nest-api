-- SQL para inserir apps no banco de dados
-- Execute este script no pgAdmin ou via psql

-- Inserir apps (skipDuplicates usando INSERT ... ON CONFLICT)
INSERT INTO "App" (code, name, description, "createdAt", "updatedAt")
VALUES 
  ('DISCARD_ME', 'Discart-me', 'Marketplace interno da comunidade', NOW(), NOW()),
  ('QRACK', 'QRACK', 'Gestão de containers e itens via QR Code', NOW(), NOW()),
  ('RH', 'RH Integração', 'Ferramentas de RH e entrevista de desligamento', NOW(), NOW()),
  ('WEALTH_TRACKER', 'Wealth Tracker', 'Investment portfolio and net worth tracking', NOW(), NOW())
ON CONFLICT (code) DO NOTHING;

-- Verificar se as apps foram inseridas
SELECT id, code, name, description FROM "App" ORDER BY code;

