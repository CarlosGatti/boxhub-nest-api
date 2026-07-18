import {
  DefinedAcademyContentStatus,
  DefinedAcademyCourseStatus,
  DefinedAcademyCourseVisibility,
  DefinedAcademyResourceStatus,
  DefinedAcademyStatus,
} from '@prisma/client';

export const PUBLIC_ACADEMY_STATUSES: DefinedAcademyStatus[] = [
  DefinedAcademyStatus.ACTIVE,
];

export const PUBLIC_COURSE_STATUSES: DefinedAcademyCourseStatus[] = [
  DefinedAcademyCourseStatus.PUBLISHED,
];

export const PUBLIC_CONTENT_STATUSES: DefinedAcademyContentStatus[] = [
  DefinedAcademyContentStatus.PUBLISHED,
];

export const PUBLIC_RESOURCE_STATUSES: DefinedAcademyResourceStatus[] = [
  DefinedAcademyResourceStatus.PUBLISHED,
];

export function isPublicCourseVisibility(
  visibility: DefinedAcademyCourseVisibility,
): boolean {
  return visibility === DefinedAcademyCourseVisibility.PUBLIC;
}

export function canAuthenticatedUserAccessCourse(
  visibility: DefinedAcademyCourseVisibility,
  isAuthenticated: boolean,
): boolean {
  if (visibility === DefinedAcademyCourseVisibility.PRIVATE) {
    return false;
  }
  if (visibility === DefinedAcademyCourseVisibility.AUTHENTICATED) {
    return isAuthenticated;
  }
  return true;
}

export type PublicationChain = {
  academyStatus: DefinedAcademyStatus;
  courseStatus: DefinedAcademyCourseStatus;
  moduleStatus: DefinedAcademyContentStatus;
  lessonStatus: DefinedAcademyContentStatus;
};

export function isLessonPubliclyVisible(chain: PublicationChain, isPreview: boolean): boolean {
  if (isPreview) {
    return (
      PUBLIC_ACADEMY_STATUSES.includes(chain.academyStatus) &&
      PUBLIC_COURSE_STATUSES.includes(chain.courseStatus)
    );
  }
  return (
    PUBLIC_ACADEMY_STATUSES.includes(chain.academyStatus) &&
    PUBLIC_COURSE_STATUSES.includes(chain.courseStatus) &&
    PUBLIC_CONTENT_STATUSES.includes(chain.moduleStatus) &&
    PUBLIC_CONTENT_STATUSES.includes(chain.lessonStatus)
  );
}
