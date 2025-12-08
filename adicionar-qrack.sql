-- SQL para adicionar o app QRACK ao banco de dados
-- Execute esta query se o app QRACK ainda não existir

INSERT INTO "App" (code, name, description, "createdAt", "updatedAt")
VALUES ('QRACK', 'Qrack', 'Sistema de gestão de containers e itens com QR Code', NOW(), NOW())
ON CONFLICT (code) DO NOTHING;

-- Verificar se foi criado
SELECT id, code, name, description FROM "App" WHERE code = 'QRACK';

-- Adicionar acesso ao QRACK para o usuário eduardo.gf@hotmail.com
INSERT INTO "UserAppAccess" ("userId", "appId", "createdAt", "updatedAt")
SELECT 
    u.id,
    a.id,
    NOW(),
    NOW()
FROM "User" u
CROSS JOIN "App" a
WHERE u.email = 'eduardo.gf@hotmail.com'
  AND a.code = 'QRACK'
  AND NOT EXISTS (
      SELECT 1 
      FROM "UserAppAccess" uaa 
      WHERE uaa."userId" = u.id 
        AND uaa."appId" = a.id
  );

-- Verificar se o acesso foi adicionado
SELECT 
    u.email,
    a.code AS app_code,
    a.name AS app_name,
    uaa."createdAt" AS acesso_concedido_em
FROM "User" u
INNER JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
INNER JOIN "App" a ON uaa."appId" = a.id
WHERE u.email = 'eduardo.gf@hotmail.com'
ORDER BY a.code;

