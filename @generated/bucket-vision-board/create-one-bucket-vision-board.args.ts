import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionBoardCreateInput } from './bucket-vision-board-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBucketVisionBoardArgs {

    @Field(() => BucketVisionBoardCreateInput, {nullable:false})
    @Type(() => BucketVisionBoardCreateInput)
    data!: BucketVisionBoardCreateInput;
}
