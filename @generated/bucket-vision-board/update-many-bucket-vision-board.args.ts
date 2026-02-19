import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionBoardUpdateManyMutationInput } from './bucket-vision-board-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';

@ArgsType()
export class UpdateManyBucketVisionBoardArgs {

    @Field(() => BucketVisionBoardUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateManyMutationInput)
    data!: BucketVisionBoardUpdateManyMutationInput;

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;
}
