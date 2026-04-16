# DEFINED Auth Contract (Frontend Integration)

This document describes the **actual auth contract currently implemented** in `boxhub-nest-api` for use by the DEFINED frontend in this monorepo.

It is intentionally conservative: use what already exists, do not invent a parallel auth system.

---

## Scope

- Monorepo backend: `boxhub-nest-api`
- App access code: `DEFINED`
- Transport: mostly GraphQL, with 2 REST endpoints under `/auth/*`
- Current auth model: **JWT bearer token** (single token, no refresh-token pair flow)

---

## 1) Auth API Contract

## GraphQL mutations/queries already available

### Login

```graphql
mutation Login($user: LoginUserInput!) {
  login(user: $user) {
    token
    user {
      id
      email
      firstName
      lastName
      isAdmin
      apps
    }
  }
}
```

Input:
- `LoginUserInput.email` (required, valid email)
- `LoginUserInput.password` (required)

Output:
- `LoginResult.token` (JWT access token)
- `LoginResult.user` (includes `apps: string[]`)

### Register

```graphql
mutation Register($user: RegisterUserInput!, $appCode: String) {
  register(user: $user, appCode: $appCode) {
    success
    message
    email
    requiresVerification
    token
    user { id email apps }
  }
}
```

Input:
- `firstName`, `lastName`, `email`, `password` required
- optional `public`, `apartment`, `appCode`
- also supports top-level `appCode` argument and app code headers

Important behavior:
- if email is not verified, returns `requiresVerification: true` and **no token**
- if already verified, returns token + user
- for DEFINED onboarding, pass `appCode: "DEFINED"` (or header `x-app-code: DEFINED`)

### Verify email (GraphQL alternative)

```graphql
mutation VerifyEmail($token: String!) {
  verifyEmail(token: $token) {
    success
    message
  }
}
```

### Resend verification (GraphQL)

```graphql
mutation ResendVerificationEmail($email: String!) {
  resendVerificationEmail(email: $email) {
    success
    message
  }
}
```

### Password reset request

```graphql
mutation RequestPasswordReset($email: String!) {
  requestPasswordReset(email: $email) {
    success
    message
  }
}
```

### Reset password

```graphql
mutation ResetPassword($token: String!, $password: String!) {
  resetPassword(token: $token, password: $password) {
    success
    message
  }
}
```

### Refresh token (exists, but not primary flow today)

```graphql
mutation RefreshToken {
  refreshToken
}
```

Notes:
- backend currently uses bearer token auth strategy
- no implemented refresh-token pair/cookie rotation contract
- treat this mutation as non-core unless backend evolves it

### Logout / revoke

- **No dedicated logout/revoke endpoint currently**
- frontend logout should clear local session/token

---

## REST endpoints available

### Verify email with redirect

`GET /auth/verify-email?token=<token>`

Behavior:
- validates token
- redirects to frontend `/verify-email?success=...` or `?error=...`

### Resend verification

`POST /auth/resend-verification`

Body:
```json
{ "email": "user@example.com" }
```

Returns generic success response (anti-enumeration behavior).

---

## 2) Session / token format

- Auth strategy: `Authorization: Bearer <jwt>`
- JWT payload includes:
  - `email`
  - `_id`
  - optional `apps: string[]`
- There is no current server-managed refresh cookie contract
- No token revocation list in current flow

Frontend expected behavior now:
- store token using existing frontend pattern already used by project
- attach bearer token in GraphQL requests
- on logout: clear token + user state

---

## 3) Guards and authorization (DEFINED)

Protected internal modules (including DEFINED) use:
- `JwtAuthGuard`
- `AppPermissionGuard` + `@RequireApp('DEFINED')`

Access rule:
- authenticated user must have `"DEFINED"` inside `user.apps`

If missing:
- backend returns forbidden with message like
  - `Access denied: User does not have access to DEFINED`

---

## 4) Standard 401/403 behavior for frontend

### 401 Unauthorized
- invalid/missing token
- user not found

### 403 Forbidden
- email not verified: code `EMAIL_NOT_VERIFIED`
- app access denied: missing `DEFINED` in apps

Recommendation:
- `401`: clear session and redirect `/signin`
- `403` + `EMAIL_NOT_VERIFIED`: redirect `/verify-email` helper flow
- `403` + access denied: show “no access to DEFINED” screen/state

---

## 5) Email flows currently available

- verification email on register (when not verified)
- resend verification
- forgot/reset password email flow
- token validity for verification stored as hash+expiry in DB (24h window configured)

---

## 6) User model expectations for frontend

Core register inputs:
- `firstName` (required)
- `lastName` (required)
- `email` (required)
- `password` (required, min 8)
- `appCode` optional (for DEFINED use `"DEFINED"`)

Auth-relevant user status fields:
- `emailVerified` (critical gate in JWT strategy)
- `apps` (must include `DEFINED` for DEFINED app access)

---

## 7) Frontend implementation checklist (DEFINED)

Implement these screens/routes using existing frontend architecture:

1. `Sign in`
2. `Sign up` (pass `appCode: "DEFINED"`)
3. `Verify email` (handle token + success/error states)
4. `Forgot password`
5. `Reset password`
6. Protected routes for `/defined/*`:
   - if not authenticated -> `/signin`
   - if authenticated without app access -> unauthorized/no-access state
   - if email not verified -> verify-email flow

Do not change global layout/design system; only integrate auth behavior.

---

## 8) Known gaps (current backend reality)

These are not blockers for Phase 1 auth UI, but important:

1. no full refresh-token rotation contract
2. no explicit logout/revoke endpoint
3. some auth paths are GraphQL + some REST (verification redirect)

Frontend should integrate current contract as-is and avoid inventing parallel behavior.

---

## 9) Copy-paste prompt for Cursor (frontend repo)

```md
Implement DEFINED authentication in frontend using existing monorepo auth patterns and backend contract from docs/defined-auth-contract-for-frontend.md.

Required:
- Sign in page wired to login mutation
- Sign up page wired to register mutation with appCode="DEFINED"
- Verify email page handling token flow (query param + backend verify endpoints)
- Forgot password and Reset password pages wired to requestPasswordReset/resetPassword
- Route protection for /defined/* with consistent 401/403 handling
- Handle EMAIL_NOT_VERIFIED and app access denied (missing DEFINED in apps)
- Keep existing layout/design and frontend architecture; no global refactor.
```

