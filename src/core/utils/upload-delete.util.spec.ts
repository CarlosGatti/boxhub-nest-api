import {
  isLocalUploadUrl,
  getLocalUploadAbsolutePath,
  deleteUploadByUrl,
} from './upload-delete.util';
import { join } from 'path';

describe('upload-delete.util', () => {
  describe('isLocalUploadUrl', () => {
    it('returns true for relative /uploads/ path', () => {
      expect(isLocalUploadUrl('/uploads/bucket-goals/cover/1/123/file.webp')).toBe(true);
      expect(isLocalUploadUrl('/uploads/avatars/foo.jpg')).toBe(true);
    });

    it('returns true for absolute URL with /uploads/ path', () => {
      expect(isLocalUploadUrl('https://api.example.com/uploads/bucket-goals/media/1/goal-5/uuid.webp')).toBe(true);
      expect(isLocalUploadUrl('http://localhost:3000/uploads/discart-items/file.jpg')).toBe(true);
    });

    it('returns false for external URLs', () => {
      expect(isLocalUploadUrl('https://images.unsplash.com/photo-123')).toBe(false);
      expect(isLocalUploadUrl('https://example.com/other/path')).toBe(false);
    });

    it('returns false for null/undefined/empty', () => {
      expect(isLocalUploadUrl(null)).toBe(false);
      expect(isLocalUploadUrl(undefined)).toBe(false);
      expect(isLocalUploadUrl('')).toBe(false);
      expect(isLocalUploadUrl('   ')).toBe(false);
    });
  });

  describe('getLocalUploadAbsolutePath', () => {
    const cwd = process.cwd();

    it('resolves relative path correctly', () => {
      const result = getLocalUploadAbsolutePath('/uploads/bucket-goals/cover/1/123/file.webp');
      expect(result).toBe(join(cwd, 'uploads', 'bucket-goals', 'cover', '1', '123', 'file.webp'));
    });

    it('resolves absolute URL path correctly', () => {
      const result = getLocalUploadAbsolutePath('https://api.example.com/uploads/bucket-goals/media/1/goal-5/uuid.webp');
      expect(result).toBe(join(cwd, 'uploads', 'bucket-goals', 'media', '1', 'goal-5', 'uuid.webp'));
    });

    it('returns null for external URL', () => {
      expect(getLocalUploadAbsolutePath('https://images.unsplash.com/photo-123')).toBeNull();
    });

    it('returns null for path traversal attempt', () => {
      expect(getLocalUploadAbsolutePath('/uploads/../etc/passwd')).toBeNull();
      expect(getLocalUploadAbsolutePath('/uploads/bucket-goals/../../etc/passwd')).toBeNull();
    });

    it('returns null for non-upload path', () => {
      expect(getLocalUploadAbsolutePath('/other/path')).toBeNull();
    });
  });

  describe('deleteUploadByUrl', () => {
    it('does not throw for external URL', async () => {
      await expect(deleteUploadByUrl('https://images.unsplash.com/photo-123')).resolves.not.toThrow();
    });

    it('does not throw for non-existent local file', async () => {
      await expect(
        deleteUploadByUrl('/uploads/bucket-goals/cover/99999/99999/nonexistent.webp'),
      ).resolves.not.toThrow();
    });
  });
});
