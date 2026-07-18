import { Field, ObjectType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkStatus } from '@generated/prisma/defined-academy-short-link-status.enum';

@ObjectType()
export class DefinedAcademyShortlinkResolve {
  @Field(() => String)
  code: string;

  @Field(() => String)
  destinationUrl: string;

  @Field(() => DefinedAcademyShortLinkStatus)
  status: keyof typeof DefinedAcademyShortLinkStatus;
}
