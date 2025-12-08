-- Query SQL para verificar se o usuário eduardo.gf@hotmail.com tem acesso ao BOXHUB
-- Execute esta query para diagnosticar o problema de registro

-- 1. Verificar se o usuário existe
SELECT 
    id,
    email,
    "firstName",
    "lastName",
    "createdAt"
FROM "User"
WHERE email = 'eduardo.gf@hotmail.com';

-- 2. Verificar TODOS os apps disponíveis no sistema
SELECT 
    id,
    code,
    name,
    description
FROM "App"
ORDER BY code;

-- 3. Verificar quais apps o usuário tem acesso
SELECT 
    u.id AS user_id,
    u.email,
    u."firstName",
    u."lastName",
    a.id AS app_id,
    a.code AS app_code,
    a.name AS app_name,
    uaa.id AS access_id,
    uaa."createdAt" AS acesso_concedido_em
FROM "User" u
LEFT JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
LEFT JOIN "App" a ON uaa."appId" = a.id
WHERE u.email = 'eduardo.gf@hotmail.com'
ORDER BY a.code;

-- 4. Verificar especificamente se tem acesso ao BOXHUB
SELECT 
    u.email,
    CASE 
        WHEN uaa.id IS NOT NULL THEN '✅ TEM ACESSO AO BOXHUB'
        ELSE '❌ SEM ACESSO AO BOXHUB'
    END AS status_boxhub,
    uaa."createdAt" AS acesso_concedido_em
FROM "User" u
LEFT JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
LEFT JOIN "App" a ON uaa."appId" = a.id AND a.code = 'BOXHUB'
WHERE u.email = 'eduardo.gf@hotmail.com';

-- 5. Se o usuário NÃO tiver acesso ao BOXHUB, use esta query para ADICIONAR acesso manualmente
-- ATENÇÃO: Execute apenas se necessário!
/*
INSERT INTO "UserAppAccess" ("userId", "appId", "createdAt", "updatedAt")
SELECT 
    u.id,
    a.id,
    NOW(),
    NOW()
FROM "User" u
CROSS JOIN "App" a
WHERE u.email = 'eduardo.gf@hotmail.com'
  AND a.code = 'BOXHUB'
  AND NOT EXISTS (
      SELECT 1 
      FROM "UserAppAccess" uaa 
      WHERE uaa."userId" = u.id 
        AND uaa."appId" = a.id
  );
*/

