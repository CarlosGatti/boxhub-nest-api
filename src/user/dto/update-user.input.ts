import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsOptional, IsString } from "class-validator";

@InputType()
export class UpdateUserInput {
  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  firstName?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  lastName?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  nickname?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  apartment?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  email?: string | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  profilePicture?: string | null;

  @Field(() => Boolean, { nullable: true })
  @IsOptional()
  @IsBoolean()
  public?: boolean | null;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @IsString()
  about?: string | null;
}
