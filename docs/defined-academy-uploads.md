# Defined Academy Uploads

REST endpoints for uploading academy logos, program (course) thumbnails, and resource files.

**Base path:** `POST /academy/upload/`

**Auth:** JWT required (`Authorization: Bearer <token>`) + user must have **DEFINED** app access.

**Public URL:** Uses `PUBLIC_API_URL` when set, otherwise request host. Configure in production:

```env
PUBLIC_API_URL=https://www.discart.me
```

---

## Folder layout on disk

```
uploads/
  academy/
    logo/{academyId}/{uuid}.webp
    programs/cover/{academyId}/{courseId}/{uuid}.webp
    resources/{academyId}/{uuid}.pdf|.webp|...
```

---

## 1. Program cover (course thumbnail)

Uploads and **automatically updates** `DefinedAcademyCourse.coverImageUrl`. Replaces previous local cover file when applicable.

**Endpoint:** `POST /academy/upload/programs/cover`

**Form fields (multipart):**

| Field | Type | Required |
|-------|------|----------|
| `file` | image | yes |
| `academyId` | number | yes |
| `courseId` | number | yes |

**Limits:** 8MB — `image/jpeg`, `image/png`, `image/webp`

**Response:**

```json
{
  "academyId": 1,
  "courseId": 5,
  "url": "https://www.discart.me/uploads/academy/programs/cover/1/5/uuid.webp"
}
```

**curl:**

```bash
curl -X POST http://localhost:3000/academy/upload/programs/cover \
  -H "Authorization: Bearer YOUR_JWT" \
  -F "academyId=1" \
  -F "courseId=5" \
  -F "file=@./cover.jpg"
```

**Frontend flow:**

1. Create/update program via GraphQL (`createDefinedAcademyCourse` / `updateDefinedAcademyCourse`)
2. Upload cover via REST (this endpoint)
3. UI refreshes course — `coverImageUrl` already updated in DB

---

## 2. Academy logo

Uploads and **automatically updates** `DefinedAcademy.logoUrl`.

**Endpoint:** `POST /academy/upload/academy/logo`

**Form fields:**

| Field | Required |
|-------|----------|
| `file` | yes |
| `academyId` | yes |

**Response:**

```json
{
  "academyId": 1,
  "url": "https://www.discart.me/uploads/academy/logo/1/uuid.webp"
}
```

---

## 3. Resource file (PDF / image)

Returns URL only — attach via GraphQL `updateDefinedAcademyResource` / `createDefinedAcademyResource` using `fileUrl`, `mimeType`, `fileName`.

**Endpoint:** `POST /academy/upload/resources/file`

**Form fields:**

| Field | Required |
|-------|----------|
| `file` | yes |
| `academyId` | yes |

**Limits:** 12MB — `image/jpeg`, `image/png`, `image/webp`, `application/pdf`

**Response:**

```json
{
  "academyId": 1,
  "url": "https://www.discart.me/uploads/academy/resources/1/uuid.pdf",
  "mimeType": "application/pdf",
  "fileName": "guide.pdf"
}
```

**GraphQL follow-up example:**

```graphql
mutation UpdateDefinedAcademyResource($academyId: Int!, $resourceId: Int!, $input: UpdateDefinedAcademyResourceInput!) {
  updateDefinedAcademyResource(academyId: $academyId, resourceId: $resourceId, input: $input) {
    id
    fileUrl
  }
}
```

```json
{
  "academyId": 1,
  "resourceId": 12,
  "input": {
    "fileUrl": "https://www.discart.me/uploads/academy/resources/1/uuid.pdf",
    "mimeType": "application/pdf",
    "fileName": "guide.pdf"
  }
}
```

---

## Errors

| Status | Cause |
|--------|--------|
| 401 | Missing/invalid JWT |
| 403 | User lacks DEFINED app access |
| 404 | Academy or course not found / wrong academy scope |
| 400 | Invalid file type, size, or non-integer `academyId`/`courseId` |

**Important:** Send `academyId` and `courseId` as **form numbers**, not quoted strings.

---

## VPS deploy note

After deploy, ensure directories exist (created at startup by `main.ts`):

```bash
mkdir -p uploads/academy/programs/cover uploads/academy/logo uploads/academy/resources
chmod -R 755 uploads/academy
```

Nginx must serve `/uploads/` (already configured for other apps).
