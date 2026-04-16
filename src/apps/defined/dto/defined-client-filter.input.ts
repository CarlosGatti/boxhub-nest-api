import { Field, InputType } from '@nestjs/graphql';
import { DefinedClientType } from '@generated/prisma/defined-client-type.enum';
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';

@InputType()
export class DefinedClientFilterInput {
  @Field(() => DefinedClientType, { nullable: true })
  @IsOptional()
  @IsEnum(DefinedClientType)
  type?: DefinedClientType;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  @MaxLength(200)
  search?: string;
}
