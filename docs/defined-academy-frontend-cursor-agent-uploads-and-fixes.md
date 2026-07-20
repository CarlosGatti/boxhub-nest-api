# Cursor Agent Script — Defined Academy Frontend (Uploads + GraphQL Fixes)

Use this in the **frontend repo** (Defined Lab / RE-Quest Academy) to:

1. **Fix** GraphQL `400 BAD_USER_INPUT` errors (`academyId` sent as string)
2. **Implement** REST file uploads for academy logos, program covers, and resources
3. **Wire** upload UI wherever admin/learner flows need images or PDFs

Follow the **same patterns** as the existing Defined site and Bucket uploads (multipart + JWT).

---

## Read first (backend source of truth)

In **`boxhub-nest-api`**:

| Doc | Purpose |
|-----|---------|
| [`defined-academy-uploads.md`](./defined-academy-uploads.md) | REST upload endpoints |
| [`DEFINED_ACADEMY_FRONTEND_IMPLEMENTATION_REPORT.md`](./DEFINED_ACADEMY_FRONTEND_IMPLEMENTATION_REPORT.md) | GraphQL API |
| [`defined-academy-frontend-cursor-agent.md`](./defined-academy-frontend-cursor-agent.md) | Phase 1 routes & flows |
| [`defined-auth-contract-for-frontend.md`](./defined-auth-contract-for-frontend.md) | JWT auth |
| [`defined-frontend-cursor-agent-complete-with-testing.md`](./defined-frontend-cursor-agent-complete-with-testing.md) | Defined site conventions |

Do **not** invent new API patterns. Reuse existing GraphQL client + auth store + error handling.

---

## Hard constraints

1. **No unrelated refactor** — scope changes to `features/academy/` (or equivalent) + shared upload helper if one already exists.
2. **Do not break** other Defined modules (clients, intake, branding, etc.).
3. **GraphQL `Int` variables must be numbers** in JSON payload — never `"1"`.
4. **Uploads use REST**, not GraphQL file upload (same as Bucket List).
5. **Admin uploads** require JWT + user with **`DEFINED`** app access.
6. **Do not set `Content-Type`** on `FormData` requests — browser sets multipart boundary.

---

## Environment variables

Reuse Defined site env naming:

```env
NEXT_PUBLIC_GRAPHQL_URL=https://www.discart.me/graphql
NEXT_PUBLIC_API_URL=https://www.discart.me
NEXT_PUBLIC_ACADEMY_SLUG=re-quest-academy
NEXT_PUBLIC_ACADEMY_ID=1
```

- `NEXT_PUBLIC_GRAPHQL_URL` → Apollo/fetch GraphQL
- `NEXT_PUBLIC_API_URL` → REST uploads (strip trailing slash)

If the project already has only `GRAPHQL_URL`, derive API base:

```typescript
const API_BASE = process.env.NEXT_PUBLIC_API_URL
  ?? process.env.NEXT_PUBLIC_GRAPHQL_URL?.replace(/\/graphql\/?$/, '')
  ?? 'http://localhost:3000';
```

---

## PART A — Fix GraphQL Int variables (CRITICAL)

### Problem seen in production

```json
"errors": [{
  "message": "Variable \"$academyId\" got invalid value \"1\"; Int cannot represent non-integer value: \"1\"",
  "extensions": { "code": "BAD_USER_INPUT" }
}]
```

UI symptom: **"Unable to load enrollments"** / **Response status 400**.

### Root cause

Route params, env vars, and form fields arrive as **strings**. Apollo sends them unchanged → GraphQL rejects before Nest runs.

### Required fix — centralize ID coercion

Create or extend `features/academy/utils/coerce-id.ts`:

```typescript
export function toInt(value: unknown, fieldName = 'id'): number {
  if (value === null || value === undefined || value === '') {
    throw new Error(`${fieldName} is required`);
  }
  const n = typeof value === 'number' ? value : parseInt(String(value), 10);
  if (!Number.isFinite(n) || n < 1) {
    throw new Error(`${fieldName} must be a positive integer`);
  }
  return n;
}

export function toOptionalInt(value: unknown): number | undefined {
  if (value === null || value === undefined || value === '') return undefined;
  return toInt(value);
}
```

### Apply everywhere Academy uses GraphQL `Int`

| Source | Fix |
|--------|-----|
| `useParams().academyId` | `toInt(params.academyId)` |
| `NEXT_PUBLIC_ACADEMY_ID` | `toInt(process.env.NEXT_PUBLIC_ACADEMY_ID)` |
| Apollo `variables` | always numbers: `{ academyId: 1 }` not `{ academyId: "1" }` |
| FormData upload fields | `form.append('academyId', String(toInt(id)))` — REST accepts numeric strings in multipart |

### Operations to audit (search & fix all)

**Learner (JWT):**
- `myDefinedAcademyEnrollments(academyId: Int)`
- `myDefinedAcademyEnrollment(enrollmentId: Int!)`
- `myDefinedAcademyCourseProgress(courseId: Int!)`
- `myDefinedAcademyLessonProgress(enrollmentId: Int!, lessonId: Int!)`
- `enrollInDefinedAcademyCourse(courseId: Int!)`
- `startDefinedAcademyLesson`, `updateDefinedAcademyLessonProgress`, `completeDefinedAcademyLesson`

**Admin (JWT + DEFINED):**
- `createDefinedAcademyCourse(academyId: Int!, input: ...)`
- `updateDefinedAcademyCourse(academyId: Int!, courseId: Int!, ...)`
- All other `academyId` / `courseId` / `lessonId` / `resourceId` args

### Apollo hook pattern (correct)

```typescript
const academyId = toInt(process.env.NEXT_PUBLIC_ACADEMY_ID ?? resolvedAcademy?.id);

const { data, error } = useQuery(MY_ENROLLMENTS, {
  variables: { academyId }, // number
  skip: !academyId,
});
```

### Verification

In DevTools → Network → GraphQL payload must show:

```json
{ "variables": { "academyId": 1 } }
```

**Not:**

```json
{ "variables": { "academyId": "1" } }
```

---

## PART B — REST upload system

Backend base: **`POST {API_BASE}/academy/upload/`**

Auth: `Authorization: Bearer ${token}`

| Endpoint | Updates DB automatically? | Use case |
|----------|---------------------------|----------|
| `POST /academy/upload/programs/cover` | ✅ `coverImageUrl` | Program/course thumbnail |
| `POST /academy/upload/academy/logo` | ✅ `logoUrl` | Academy branding |
| `POST /academy/upload/resources/file` | ❌ returns URL | PDF/image → GraphQL resource |

### Shared upload client

Create `features/academy/api/academy-upload.api.ts` (or match existing project path):

```typescript
import { getAccessToken } from '@/lib/auth'; // reuse Defined auth
import { toInt } from '../utils/coerce-id';

const API_BASE = (
  process.env.NEXT_PUBLIC_API_URL
  ?? process.env.NEXT_PUBLIC_GRAPHQL_URL?.replace(/\/graphql\/?$/, '')
  ?? 'http://localhost:3000'
).replace(/\/$/, '');

type UploadResult = {
  academyId: number;
  courseId?: number;
  url: string;
  mimeType?: string;
  fileName?: string;
};

async function academyUpload(
  path: string,
  fields: Record<string, string | number>,
  file: File,
): Promise<UploadResult> {
  const token = getAccessToken();
  if (!token) throw new Error('Authentication required');

  const form = new FormData();
  Object.entries(fields).forEach(([key, value]) => {
    form.append(key, String(value));
  });
  form.append('file', file);

  const res = await fetch(`${API_BASE}/academy/upload/${path}`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
    body: form,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Upload failed (${res.status})`);
  }
  return res.json();
}

export function uploadProgramCover(params: {
  academyId: number | string;
  courseId: number | string;
  file: File;
}) {
  return academyUpload('programs/cover', {
    academyId: toInt(params.academyId, 'academyId'),
    courseId: toInt(params.courseId, 'courseId'),
  }, params.file);
}

export function uploadAcademyLogo(params: {
  academyId: number | string;
  file: File;
}) {
  return academyUpload('academy/logo', {
    academyId: toInt(params.academyId, 'academyId'),
  }, params.file);
}

export function uploadResourceFile(params: {
  academyId: number | string;
  file: File;
}) {
  return academyUpload('resources/file', {
    academyId: toInt(params.academyId, 'academyId'),
  }, params.file);
}
```

### File validation (client-side, before upload)

```typescript
const IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const RESOURCE_TYPES = [...IMAGE_TYPES, 'application/pdf'];
const MAX_COVER_BYTES = 8 * 1024 * 1024;
const MAX_RESOURCE_BYTES = 12 * 1024 * 1024;

export function validateImageFile(file: File, maxBytes = MAX_COVER_BYTES) {
  if (!IMAGE_TYPES.includes(file.type)) {
    throw new Error('Use JPEG, PNG, or WebP');
  }
  if (file.size > maxBytes) {
    throw new Error(`File must be under ${maxBytes / 1024 / 1024}MB`);
  }
}
```

---

## PART C — UI integration (where to add uploads)

Reuse existing Defined/Bucket upload component patterns if present (`FileInput`, `ImageUploader`, drag-drop). Otherwise create minimal `AcademyImageUpload.tsx`.

### 1. Program create/edit form (admin)

**Flow:**

1. Save program metadata via GraphQL (`createDefinedAcademyCourse` / `updateDefinedAcademyCourse`) — **without** cover URL in input if using upload endpoint.
2. If user selected cover image → `uploadProgramCover({ academyId, courseId, file })`.
3. Refetch course query — `coverImageUrl` already updated by backend.
4. Show preview using returned `url`.

**Do not** pass local blob URL as `coverImageUrl` in GraphQL.

```typescript
async function handleSaveProgram(input: CreateCourseInput, coverFile?: File | null) {
  const academyId = toInt(selectedAcademyId);
  const course = await createCourse({ variables: { academyId, input } });
  const courseId = toInt(course.data?.createDefinedAcademyCourse?.id);

  if (coverFile) {
    validateImageFile(coverFile);
    await uploadProgramCover({ academyId, courseId, file: coverFile });
  }
  await refetchCourses();
}
```

**Edit existing program cover:**

```typescript
await uploadProgramCover({
  academyId: toInt(academyId),
  courseId: toInt(course.id),
  file: newCoverFile,
});
```

### 2. Academy settings (admin)

- Logo upload → `uploadAcademyLogo`
- Refetch `definedAcademy` or `definedAcademyBySlug`

### 3. Resource editor (admin)

**Flow:**

1. `uploadResourceFile({ academyId, file })` → get `{ url, mimeType, fileName }`
2. Create/update resource via GraphQL:

```graphql
mutation CreateDefinedAcademyResource($academyId: Int!, $input: CreateDefinedAcademyResourceInput!) {
  createDefinedAcademyResource(academyId: $academyId, input: $input) {
    id
    fileUrl
    type
  }
}
```

```json
{
  "academyId": 1,
  "input": {
    "title": "Brand Guide",
    "type": "PDF",
    "fileUrl": "https://.../uploads/academy/resources/1/uuid.pdf",
    "mimeType": "application/pdf",
    "fileName": "brand-guide.pdf",
    "visibility": "PUBLIC"
  }
}
```

Map MIME → enum: `application/pdf` → `PDF`, images → `IMAGE`.

### 4. Public display (no upload)

- Render `<img src={course.coverImageUrl} />` — URLs may be absolute (`https://discart.me/uploads/...`) or relative (`/uploads/...`).
- If relative, prefix with `NEXT_PUBLIC_API_URL`.

```typescript
export function resolveMediaUrl(url?: string | null) {
  if (!url) return undefined;
  if (url.startsWith('http')) return url;
  return `${API_BASE}${url.startsWith('/') ? '' : '/'}${url}`;
}
```

### 5. Partner logo (optional Phase 2)

No dedicated partner logo endpoint yet — use `uploadResourceFile` + `updateDefinedAcademyPartner({ logoUrl })` via GraphQL, **or** external URL field.

---

## PART D — Error handling (match Defined site)

| Error | UI |
|-------|-----|
| GraphQL `BAD_USER_INPUT` on Int | Fix variables — run Part A audit |
| 401 on upload | Redirect to sign in |
| 403 on upload | "Defined backoffice access required" |
| 400 invalid file | Show validation message |
| Upload success | Toast + refresh image preview |

---

## PART E — Files to create/update (checklist)

### Create

- [ ] `features/academy/utils/coerce-id.ts`
- [ ] `features/academy/utils/resolve-media-url.ts`
- [ ] `features/academy/api/academy-upload.api.ts`
- [ ] `features/academy/components/AcademyImageUpload.tsx` (or reuse existing uploader)
- [ ] `features/academy/components/AcademyResourceFileUpload.tsx`

### Update (search codebase)

- [ ] All Academy GraphQL hooks — coerce `academyId`, `courseId`, `enrollmentId`, `lessonId`
- [ ] Program create/edit form — cover upload after save
- [ ] Academy settings — logo upload
- [ ] Resource create/edit — file upload + GraphQL
- [ ] Home/enrollments page — fix `myDefinedAcademyEnrollments` variables

---

## PART F — Manual testing guide (agent must deliver)

### Test 1 — Enrollments load (GraphQL fix)

1. Login as learner
2. Open Home tab
3. Network: `MyDefinedAcademyEnrollments` → `variables.academyId` is **number**
4. Expect: no 400, list renders (or empty state)

### Test 2 — Create program + cover (admin)

1. Login with DEFINED access
2. Create program "Build Your Personal Brand"
3. Upload cover image
4. Expect: course card shows new thumbnail
5. Network: `POST /academy/upload/programs/cover` → 200 + `url`

### Test 3 — Replace cover

1. Edit same program, upload new image
2. Expect: new URL, old image replaced in UI

### Test 4 — Resource PDF

1. Upload PDF via resource endpoint
2. Create resource with returned URL
3. Public lesson page can link/download file

### Test 5 — Unauthorized upload

1. Login without DEFINED access
2. Attempt admin upload → 403 with clear message

---

## Required deliverables from the agent

When done, output:

1. Summary of fixes (Int coercion + upload)
2. File list changed
3. Screens/forms that now support upload
4. Confirmation Network tab shows numeric GraphQL variables
5. Manual test results for Tests 1–3 minimum

---

## Paste this prompt in Cursor (frontend repo)

```
Implement Defined Academy frontend fixes and upload system following exactly:
boxhub-nest-api/docs/defined-academy-frontend-cursor-agent-uploads-and-fixes.md

Priority 1: Fix all GraphQL Int variables (academyId, courseId, etc.) — must be numbers, not strings. This fixes "Unable to load enrollments" 400 errors.

Priority 2: Implement REST upload client and UI for:
- Program cover: POST /academy/upload/programs/cover
- Academy logo: POST /academy/upload/academy/logo
- Resource files: POST /academy/upload/resources/file + GraphQL resource mutation

Reuse existing Defined site patterns for auth (JWT), GraphQL client, layout, and error toasts. Do not refactor unrelated modules.

Env: NEXT_PUBLIC_GRAPHQL_URL, NEXT_PUBLIC_API_URL, NEXT_PUBLIC_ACADEMY_ID=1, NEXT_PUBLIC_ACADEMY_SLUG=re-quest-academy

Deliver: code changes + short test report confirming enrollments load and program cover upload works.
```

---

## Quick reference — REST endpoints

```bash
# Program cover (auto-updates coverImageUrl)
POST /academy/upload/programs/cover
Form: file, academyId, courseId
Auth: Bearer JWT + DEFINED app

# Academy logo (auto-updates logoUrl)
POST /academy/upload/academy/logo
Form: file, academyId

# Resource file (returns URL for GraphQL)
POST /academy/upload/resources/file
Form: file, academyId
```

Full spec: [`defined-academy-uploads.md`](./defined-academy-uploads.md)
