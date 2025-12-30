# Wealth Tracker Integration - Multi-Project Auth Pattern

## Existing Multi-Project Authentication Pattern

### Architecture Overview
This monorepo uses a **shared authentication system** where:
- **Single User table** - All projects share the same users
- **App model** - Each project is registered as an `App` with a unique `code`
- **UserAppAccess** - Links users to apps they have access to
- **JWT includes apps** - Token payload contains array of app codes user can access
- **AppPermissionGuard** - Enforces app-level access control

### How It Works

1. **App Registration**
   - Apps are seeded via `prisma/seed.apps.ts`
   - Each app has: `code` (unique identifier), `name`, `description`
   - Examples: `DISCARD_ME`, `QRACK`, `RH`

2. **User Creation**
   - Users created via GraphQL mutation (`createUser`)
   - Automatically linked to `DISCARD_ME` app by default
   - Can be linked to additional apps via `UserAppAccess` records

3. **Login Flow**
   - GraphQL mutation: `login(user: LoginUserInput)`
   - Uses `AuthService.validateUserByPassword()`
   - Returns JWT token with `apps` array in payload
   - Token includes app codes user has access to

4. **Access Control**
   - `AppPermissionGuard` checks if user has access to specific app
   - Used with `@RequireApp('APP_CODE')` decorator
   - Currently GraphQL-focused (uses `GqlExecutionContext`)

5. **JWT Structure**
   ```typescript
   {
     email: string;
     _id: string;
     apps?: string[]; // Array of app codes
   }
   ```

### Existing Projects
- **QRACK**: Uses `@RequireApp('QRACK')` guard
- **Discart-me**: Uses `@RequireApp('DISCARD_ME')` guard
- Both use same User table and login endpoints

## Wealth Tracker Integration Requirements

### ✅ What Was Done Correctly
- Uses same User table (via `userId` foreign key)
- Uses same PrismaService
- Uses same JWT system

### ❌ What Needs Fixing
1. **Duplicate Auth Endpoints**: Created `/auth/register` and `/auth/login` REST endpoints that bypass existing system
2. **Missing App Registration**: No `WEALTH_TRACKER` app in seed file
3. **Missing Permission Checks**: Wealth Tracker endpoints don't check app access
4. **Separate Refresh Token System**: Created refresh tokens that don't integrate with existing JWT

### Fixes Needed
1. Add `WEALTH_TRACKER` to app seed
2. Make REST auth endpoints use existing `AuthService` methods
3. Add `AppPermissionGuard` (REST-compatible) to Wealth Tracker endpoints
4. Ensure user creation can link to Wealth Tracker app
5. Integrate refresh tokens with existing JWT system (or remove if not needed)

## Integration Checklist

- [x] User table shared (Portfolio.userId → User.id)
- [ ] WEALTH_TRACKER app registered in seed
- [ ] Auth endpoints use existing AuthService
- [ ] AppPermissionGuard added to Wealth Tracker endpoints
- [ ] User creation can link to Wealth Tracker
- [ ] No duplicate auth logic
- [ ] JWT includes WEALTH_TRACKER in apps array when user has access
