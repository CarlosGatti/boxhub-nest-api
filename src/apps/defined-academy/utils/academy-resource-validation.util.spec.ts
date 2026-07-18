import { BadRequestException } from '@nestjs/common';
import { DefinedAcademyResourceType } from '@prisma/client';
import { validateAcademyResourcePayload } from './academy-resource-validation.util';

describe('validateAcademyResourcePayload', () => {
  it('requires externalUrl for EXTERNAL_LINK', () => {
    expect(() =>
      validateAcademyResourcePayload({ type: DefinedAcademyResourceType.EXTERNAL_LINK }),
    ).toThrow(BadRequestException);
  });

  it('rejects unsafe external protocols', () => {
    expect(() =>
      validateAcademyResourcePayload({
        type: DefinedAcademyResourceType.EXTERNAL_LINK,
        externalUrl: 'javascript:alert(1)',
      }),
    ).toThrow(BadRequestException);
  });

  it('requires textContent for TEXT resources', () => {
    expect(() =>
      validateAcademyResourcePayload({ type: DefinedAcademyResourceType.TEXT }),
    ).toThrow(BadRequestException);
  });

  it('requires fileUrl for PDF resources', () => {
    expect(() =>
      validateAcademyResourcePayload({ type: DefinedAcademyResourceType.PDF }),
    ).toThrow(BadRequestException);
  });
});
