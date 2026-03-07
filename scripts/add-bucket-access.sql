-- Script para adicionar acesso ao Bucket List para um usuário existente
-- Uso: substitua 'seu@email.com' pelo seu email e execute no banco de produção

-- 1. Garantir que o app BUCKET existe
INSERT INTO "App" (code, name, description, "createdAt", "updatedAt")
VALUES 
  ('BUCKET', 'Bucket List', 'Personal goals, memories, and map pins', NOW(), NOW())
ON CONFLICT (code) DO NOTHING;

-- 2. Adicionar acesso ao Bucket (substitua 'seu@email.com' pelo seu email)
INSERT INTO "UserAppAccess" ("userId", "appId", "createdAt", "updatedAt")
SELECT u.id, a.id, NOW(), NOW()
FROM "User" u
CROSS JOIN "App" a
WHERE LOWER(TRIM(u.email)) = LOWER(TRIM('seu@email.com'))
  AND a.code = 'BUCKET'
  AND NOT EXISTS (
    SELECT 1 FROM "UserAppAccess" uaa 
    WHERE uaa."userId" = u.id AND uaa."appId" = a.id
  );

-- 3. Diagnóstico: ver usuários e seus apps (opcional)
-- SELECT u.id, u.email, u."emailVerified", array_agg(a.code) as apps
-- FROM "User" u
-- LEFT JOIN "UserAppAccess" uaa ON uaa."userId" = u.id
-- LEFT JOIN "App" a ON a.id = uaa."appId"
-- WHERE LOWER(u.email) LIKE '%seu@email%'
-- GROUP BY u.id, u.email, u."emailVerified";
