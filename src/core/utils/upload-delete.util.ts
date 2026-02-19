import { join, resolve } from 'path';
import { unlink, access } from 'fs/promises';
import { constants } from 'fs';

const UPLOADS_ROOT = join(process.cwd(), 'uploads');
const UPLOADS_PREFIX = '/uploads/';

/**
 * Check if a URL points to a local upload (our /uploads/ directory).
 * Accepts both relative "/uploads/..." and absolute "${PUBLIC_API_URL}/uploads/..."
 */
export function isLocalUploadUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string' || url.trim() === '') {
    return false;
  }
  const trimmed = url.trim();
  if (trimmed.startsWith(UPLOADS_PREFIX)) {
    return true;
  }
  try {
    const parsed = new URL(trimmed);
    return parsed.pathname.startsWith(UPLOADS_PREFIX);
  } catch {
    return false;
  }
}

/**
 * Resolve a local upload URL to an absolute filesystem path.
 * Returns null if URL is not a local upload or path would escape UPLOADS_ROOT (path traversal).
 */
export function getLocalUploadAbsolutePath(url: string | null | undefined): string | null {
  if (!isLocalUploadUrl(url)) {
    return null;
  }
  let pathname: string;
  try {
    const trimmed = (url as string).trim();
    if (trimmed.startsWith(UPLOADS_PREFIX)) {
      pathname = trimmed;
    } else {
      const parsed = new URL(trimmed);
      pathname = parsed.pathname;
    }
  } catch {
    return null;
  }
  // pathname is like "/uploads/bucket-goals/cover/1/123/uuid.webp"
  // Strip leading /uploads/ to get path relative to UPLOADS_ROOT
  const afterPrefix = pathname.replace(/^\/uploads\/?/, '') || '';
  if (!afterPrefix || afterPrefix.startsWith('/')) {
    return null;
  }
  if (afterPrefix.includes('..')) {
    return null;
  }
  const absolutePath = resolve(UPLOADS_ROOT, afterPrefix);
  const normalizedRoot = resolve(UPLOADS_ROOT);
  if (!absolutePath.startsWith(normalizedRoot)) {
    return null;
  }
  return absolutePath;
}

/**
 * Delete a physical file by URL if it is a local upload.
 * Best-effort: if file does not exist, ignore; if unlink fails, log but do not throw.
 */
export async function deleteUploadByUrl(url: string | null | undefined): Promise<void> {
  const absolutePath = getLocalUploadAbsolutePath(url);
  if (!absolutePath) {
    return;
  }
  try {
    await access(absolutePath, constants.F_OK);
  } catch {
    return;
  }
  try {
    await unlink(absolutePath);
  } catch (err) {
    console.error(`[upload-delete] Failed to unlink ${absolutePath}:`, err);
  }
}
