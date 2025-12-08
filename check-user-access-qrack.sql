-- Query SQL para verificar se o usuário eduardo.gf@hotmail.com possui acesso ao sistema "qrack"
-- (Ajuste o código do app conforme necessário: BOXHUB, DISCARD_ME, RH, ou outro)

-- Opção 1: Verificar acesso ao app específico (substitua 'QRACK' pelo código correto)
SELECT 
    u.id AS user_id,
    u.email,
    u."firstName" || ' ' || u."lastName" AS nome_completo,
    a.code AS app_code,
    a.name AS app_name,
    CASE 
        WHEN uaa.id IS NOT NULL THEN '✅ TEM ACESSO'
        ELSE '❌ SEM ACESSO'
    END AS status,
    uaa."createdAt" AS acesso_concedido_em
FROM "User" u
LEFT JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
LEFT JOIN "App" a ON uaa."appId" = a.id AND a.code = 'BOXHUB'  -- Altere para o código correto do app
WHERE u.email = 'eduardo.gf@hotmail.com';

-- Opção 2: Verificar TODOS os apps disponíveis e quais o usuário tem acesso
SELECT 
    a.code AS app_code,
    a.name AS app_name,
    CASE 
        WHEN uaa.id IS NOT NULL THEN '✅ TEM ACESSO'
        ELSE '❌ SEM ACESSO'
    END AS status_acesso,
    uaa."createdAt" AS acesso_concedido_em
FROM "App" a
LEFT JOIN "UserAppAccess" uaa ON a.id = uaa."appId"
LEFT JOIN "User" u ON uaa."userId" = u.id AND u.email = 'eduardo.gf@hotmail.com'
ORDER BY a.code;

-- Opção 3: Verificar apenas se TEM acesso (retorna true/false)
SELECT 
    u.email,
    EXISTS(
        SELECT 1 
        FROM "UserAppAccess" uaa
        INNER JOIN "App" a ON uaa."appId" = a.id
        WHERE uaa."userId" = u.id
          AND a.code = 'BOXHUB'  -- Altere para o código correto do app
    ) AS tem_acesso_boxhub
FROM "User" u
WHERE u.email = 'eduardo.gf@hotmail.com';

-- Opção 4: Listar todos os apps que o usuário tem acesso
SELECT 
    u.email,
    u."firstName",
    u."lastName",
    STRING_AGG(a.code, ', ') AS apps_com_acesso,
    STRING_AGG(a.name, ', ') AS nomes_dos_apps
FROM "User" u
INNER JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
INNER JOIN "App" a ON uaa."appId" = a.id
WHERE u.email = 'eduardo.gf@hotmail.com'
GROUP BY u.id, u.email, u."firstName", u."lastName";

-- Opção 5: Verificar qual é o código correto do app "qrack"
-- (Lista todos os apps disponíveis no sistema)
SELECT 
    id,
    code,
    name,
    description
FROM "App"
ORDER BY code;

