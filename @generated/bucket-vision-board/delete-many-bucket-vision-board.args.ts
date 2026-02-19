import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBucketVisionBoardArgs {

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;
}
