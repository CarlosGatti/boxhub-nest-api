import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class UpdateDefinedBrandingProjectVisibilityInput {
  @Field(() => Boolean)
  @IsBoolean()
  isPublic: boolean;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  publishedAt?: Date;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  isFeatured?: boolean;
}
