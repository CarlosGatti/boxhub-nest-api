import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardScalarWhereInput } from './bucket-vision-board-scalar-where.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardUpdateManyMutationInput } from './bucket-vision-board-update-many-mutation.input';

@InputType()
export class BucketVisionBoardUpdateManyWithWhereWithoutUserInput {

    @Field(() => BucketVisionBoardScalarWhereInput, {nullable:false})
    @Type(() => BucketVisionBoardScalarWhereInput)
    where!: BucketVisionBoardScalarWhereInput;

    @Field(() => BucketVisionBoardUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateManyMutationInput)
    data!: BucketVisionBoardUpdateManyMutationInput;
}
