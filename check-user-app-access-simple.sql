-- Query SQL Simples: Verificar acesso do usuário ao BoxHub
-- Execute esta query no PostgreSQL para verificar se o usuário tem acesso

SELECT 
    u.email,
    a.code AS app_code,
    a.name AS app_name,
    CASE 
        WHEN uaa.id IS NOT NULL THEN 'SIM - Tem acesso'
        ELSE 'NÃO - Sem acesso'
    END AS status_acesso
FROM "User" u
LEFT JOIN "UserAppAccess" uaa ON u.id = uaa."userId"
LEFT JOIN "App" a ON uaa."appId" = a.id AND a.code = 'BOXHUB'
WHERE u.email = 'eduardo.gf@hotmail.com';

-- Se retornar NULL na coluna app_code, significa que o usuário NÃO tem acesso ao BoxHub
-- Se retornar 'BOXHUB', significa que o usuário TEM acesso

