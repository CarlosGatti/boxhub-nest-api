# Email Verification Template

Este template é usado para enviar emails de verificação de conta para novos usuários do Discart-me.

## Logo

A logo do Discart-me deve ser colocada em uma das seguintes opções:

### Opção 1: URL Externa (Recomendado)
Coloque a logo em `https://www.discart.me/static/email/img/logo-discart-me.png` e ela será carregada automaticamente.

### Opção 2: Arquivo Local
1. Coloque o arquivo `logo-discart-me.png` na pasta `assets/` deste template
2. Atualize o template para usar `cid:logo` ao invés de URL
3. Descomente o código de attachments no `EmailVerificationTemplate`

## Variáveis Disponíveis

- `firstName`: Primeiro nome do usuário
- `lastName`: Último nome do usuário
- `token`: Token JWT para verificação do email
- `year`: Ano atual

## Exemplo de Uso

```typescript
await mailService.send({
  path: "email-verification",
  to: user.email,
  subject: "Verify Your Email Address - Discart-me",
  variables: {
    firstName: user.firstName,
    lastName: user.lastName,
    token: verificationToken,
    year: new Date().getFullYear(),
  },
});
```

