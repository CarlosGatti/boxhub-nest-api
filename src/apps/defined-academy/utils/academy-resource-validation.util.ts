import { BadRequestException } from '@nestjs/common';
import { DefinedAcademyResourceType } from '@prisma/client';
import { assertSafeExternalUrl, isSafeExternalUrl } from './academy-url.util';

export function validateAcademyResourcePayload(input: {
  type: DefinedAcademyResourceType;
  fileUrl?: string | null;
  externalUrl?: string | null;
  textContent?: string | null;
}): void {
  switch (input.type) {
    case DefinedAcademyResourceType.EXTERNAL_LINK:
    case DefinedAcademyResourceType.EMBED:
      if (!input.externalUrl?.trim()) {
        throw new BadRequestException(`${input.type} requires externalUrl`);
      }
      try {
        assertSafeExternalUrl(input.externalUrl, 'externalUrl');
      } catch (error) {
        throw new BadRequestException((error as Error).message);
      }
      break;
    case DefinedAcademyResourceType.TEXT:
    case DefinedAcademyResourceType.GUIDE:
    case DefinedAcademyResourceType.CHECKLIST:
    case DefinedAcademyResourceType.TEMPLATE:
      if (!input.textContent?.trim()) {
        throw new BadRequestException(`${input.type} requires textContent`);
      }
      break;
    case DefinedAcademyResourceType.PDF:
    case DefinedAcademyResourceType.IMAGE:
    case DefinedAcademyResourceType.FILE:
      if (!input.fileUrl?.trim()) {
        throw new BadRequestException(`${input.type} requires fileUrl`);
      }
      if (!isSafeExternalUrl(input.fileUrl) && !input.fileUrl.startsWith('/uploads/')) {
        throw new BadRequestException('fileUrl must be a safe http(s) URL or local upload path');
      }
      break;
    default:
      break;
  }
}
