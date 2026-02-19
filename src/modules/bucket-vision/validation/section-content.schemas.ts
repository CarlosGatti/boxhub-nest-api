import { z } from 'zod';
import { BucketVisionSectionType } from '@generated/prisma/bucket-vision-section-type.enum';

const jsonObject = z
  .record(z.any())
  .refine((obj) => obj !== null && typeof obj === 'object' && !Array.isArray(obj), {
    message: 'content must be a JSON object, not array or string',
  });

export const LIFE_WELLBEING_CONTENT_SCHEMA = z.object({
  feelMore: z.string().optional(),
  buildHabit: z.string().optional(),
  letGoHabit: z.string().optional(),
  stayConnectedTo: z.string().optional(),
  dailyRoutine: z.string().optional(),
});

export const SCHOOL_LEARNING_CONTENT_SCHEMA = z.object({
  courseExcited: z.string().optional(),
  skillImprove: z.string().optional(),
  challengeOvercome: z.string().optional(),
  studyHabitBuild: z.string().optional(),
  progressWhen: z.string().optional(),
});

export const DREAM_BIG_CONTENT_SCHEMA = z.object({
  bigDream: z.string().optional(),
  achievementFeeling: z.string().optional(),
  whyMatters: z.string().optional(),
});

export const CAREER_GROWTH_CONTENT_SCHEMA = z.object({
  pathExplore: z.string().optional(),
  skillCertification: z.string().optional(),
  connectionMake: z.string().optional(),
  oneStepThisYear: z.string().optional(),
  proudStatement: z.string().optional(),
});

export const VISUAL_INSPIRATION_CONTENT_SCHEMA = z.object({});

const SECTION_CONTENT_SCHEMAS: Record<string, z.ZodTypeAny> = {
  [BucketVisionSectionType.LIFE_WELLBEING]: LIFE_WELLBEING_CONTENT_SCHEMA,
  [BucketVisionSectionType.SCHOOL_LEARNING]: SCHOOL_LEARNING_CONTENT_SCHEMA,
  [BucketVisionSectionType.DREAM_BIG]: DREAM_BIG_CONTENT_SCHEMA,
  [BucketVisionSectionType.CAREER_GROWTH]: CAREER_GROWTH_CONTENT_SCHEMA,
  [BucketVisionSectionType.VISUAL_INSPIRATION]: VISUAL_INSPIRATION_CONTENT_SCHEMA,
  [BucketVisionSectionType.CUSTOM]: jsonObject,
};

/**
 * Validates section content. Returns null for empty sections (allowed).
 * Returns validated object otherwise.
 */
export function validateSectionContent(type: string, content: unknown): object | null {
  if (content === null || content === undefined) {
    return null;
  }

  if (typeof content !== 'object' || Array.isArray(content)) {
    throw new Error('Section content must be a JSON object');
  }

  const schema = SECTION_CONTENT_SCHEMAS[type] ?? jsonObject;
  const result = schema.safeParse(content);
  if (!result.success) {
    const messages = result.error.errors.map((e) => `${e.path.join('.')}: ${e.message}`).join('; ');
    throw new Error(`Invalid section content for type ${type}: ${messages}`);
  }
  return result.data as object;
}
