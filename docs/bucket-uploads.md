# Bucket List Image Uploads

REST endpoints for uploading images to Bucket Goals and Vision Board.

**Base path:** `POST /api/bucket-goals/upload/`

**Auth:** All endpoints require `Authorization: Bearer <jwt-token>`.

**File limits:**
- Max size: 8MB
- Allowed types: `image/jpeg`, `image/png`, `image/webp`

**Public URL:** Returned URLs use `PUBLIC_API_URL` (env) or request host. Configure `PUBLIC_API_URL` in production (e.g. `https://api.example.com`).

---

## 1. Upload Goal Cover

Upload a cover image for a BucketGoal. The goal's `coverUrl` is updated automatically.

**Endpoint:** `POST /api/bucket-goals/upload/cover`

**Form fields:**
- `file` (required): image file
- `goalId` (required): BucketGoal ID (must belong to current user)

**Response:**
```json
{
  "goalId": 123,
  "url": "https://api.example.com/uploads/bucket-goals/cover/1/123/uuid.webp"
}
```

**Example (curl):**
```bash
curl -X POST http://localhost:3000/api/bucket-goals/upload/cover \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "goalId=123" \
  -F "file=@/path/to/cover.jpg"
```

---

## 2. Upload Media (generic)

Upload an image for BucketGoalMedia, Vision Board items, or log attachments. Returns the URL; the frontend attaches it via GraphQL mutations.

**Endpoint:** `POST /api/bucket-goals/upload/media`

**Form fields:**
- `file` (required): image file
- `goalId` (optional): BucketGoal ID — use for goal media
- `boardId` (optional): BucketVisionBoard ID — use for vision board items
- `logId` (optional): BucketGoalLog ID — use for log attachments

At least one of `goalId`, `boardId`, or `logId` is required.

**Response:**
```json
{
  "scope": "goal-123",
  "url": "https://api.example.com/uploads/bucket-goals/media/1/goal-123/uuid.webp"
}
```

**Example (curl) — goal media:**
```bash
curl -X POST http://localhost:3000/api/bucket-goals/upload/media \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "goalId=5" \
  -F "file=@/path/to/photo.jpg"
```

**Example (curl) — vision board item:**
```bash
curl -X POST http://localhost:3000/api/bucket-goals/upload/media \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "boardId=1" \
  -F "file=@/path/to/inspiration.png"
```

**Example (curl) — log attachment:**
```bash
curl -X POST http://localhost:3000/api/bucket-goals/upload/media \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -F "logId=42" \
  -F "file=@/path/to/memory.jpg"
```

---

## File Path Structure

Files are stored under `uploads/bucket-goals/`:

- **Cover:** `cover/{userId}/{goalId}/{uuid}.{ext}`
- **Media:** `media/{userId}/{scope}/{uuid}.{ext}` where scope is `goal-{id}`, `board-{id}`, or `log-{id}`

Images may be resized (max 1600px cover, 1400px media) and converted to WebP.

---

## Static Serving

The `/uploads` directory is served statically. Returned URLs are accessible in the browser when the API is running.

In production, ensure Nginx (or your reverse proxy) serves `/uploads` or that the Nest static middleware is enabled.

---

## Image Deletion (GraphQL)

When removing images, use these mutations so the physical file is deleted:

- **removeBucketGoalCover(goalId)** — Clears `coverUrl` and deletes the local file if applicable.
- **deleteBucketGoalMedia(mediaId)** — Deletes the media record and its local file if applicable.
- **deleteBucketVisionItem(itemId)** — Deletes the item and its local file if applicable (when item has `url`).

External URLs (e.g. Unsplash) are never deleted; only the DB reference is removed.
