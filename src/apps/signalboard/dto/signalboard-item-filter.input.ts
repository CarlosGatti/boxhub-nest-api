import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsOptional } from 'class-validator';

@InputType()
export class SignalboardItemFilterInput {
  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  unread?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  saved?: boolean;

  @Field({ nullable: true })
  @IsOptional()
  @IsBoolean()
  hidden?: boolean;
}
