-- Query SQL para verificar se o usuário eduardo.gf@hotmail.com possui acesso ao BoxHub
-- (Sistema de containers/QR Code)

-- Opção 1: Verificar acesso ao BoxHub especificamente
SELECT 
    u.id AS user_id,
    u.email,
    u."firstName",
    u."lastName",
    a.code AS app_code,
    a.name AS app_name,
    uaa.id AS access_id,
    uaa."createdAt" AS access_granted_at
FROM "User" u
INNER JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
INNER JOIN "App" a ON uaa."appId" = a.id
WHERE u.email = 'eduardo.gf@hotmail.com'
  AND a.code = 'BOXHUB';

-- Opção 2: Verificar TODOS os apps que o usuário tem acesso
SELECT 
    u.id AS user_id,
    u.email,
    u."firstName",
    u."lastName",
    a.code AS app_code,
    a.name AS app_name,
    a.description AS app_description,
    uaa.id AS access_id,
    uaa."createdAt" AS access_granted_at
FROM "User" u
INNER JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
INNER JOIN "App" a ON uaa."appId" = a.id
WHERE u.email = 'eduardo.gf@hotmail.com'
ORDER BY a.code;

-- Opção 3: Verificar se o usuário TEM acesso ao BoxHub (retorna true/false)
SELECT 
    u.email,
    CASE 
        WHEN COUNT(uaa.id) > 0 THEN true 
        ELSE false 
    END AS has_boxhub_access
FROM "User" u
LEFT JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
LEFT JOIN "App" a ON uaa."appId" = a.id AND a.code = 'BOXHUB'
WHERE u.email = 'eduardo.gf@hotmail.com'
GROUP BY u.email;

-- Opção 4: Verificar se o usuário existe e listar seus acessos de forma resumida
SELECT 
    u.id,
    u.email,
    u."firstName",
    u."lastName",
    ARRAY_AGG(a.code) AS apps_codes,
    ARRAY_AGG(a.name) AS apps_names
FROM "User" u
LEFT JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
LEFT JOIN "App" a ON uaa."appId" = a.id
WHERE u.email = 'eduardo.gf@hotmail.com'
GROUP BY u.id, u.email, u."firstName", u."lastName";

-- Opção 5: Adicionar acesso ao BoxHub para o usuário (se não tiver)
-- ATENÇÃO: Execute apenas se necessário!
-- INSERT INTO "UserAppAccess" ("userId", "appId")
-- SELECT 
--     u.id,
--     a.id
-- FROM "User" u
-- CROSS JOIN "App" a
-- WHERE u.email = 'eduardo.gf@hotmail.com'
--   AND a.code = 'BOXHUB'
--   AND NOT EXISTS (
--       SELECT 1 
--       FROM "UserAppAccess" uaa 
--       WHERE uaa."userId" = u.id 
--         AND uaa."appId" = a.id
--   );

