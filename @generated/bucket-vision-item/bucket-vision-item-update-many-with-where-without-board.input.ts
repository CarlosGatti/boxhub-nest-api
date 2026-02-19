import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionItemScalarWhereInput } from './bucket-vision-item-scalar-where.input';
import { Type } from 'class-transformer';
import { BucketVisionItemUpdateManyMutationInput } from './bucket-vision-item-update-many-mutation.input';

@InputType()
export class BucketVisionItemUpdateManyWithWhereWithoutBoardInput {

    @Field(() => BucketVisionItemScalarWhereInput, {nullable:false})
    @Type(() => BucketVisionItemScalarWhereInput)
    where!: BucketVisionItemScalarWhereInput;

    @Field(() => BucketVisionItemUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketVisionItemUpdateManyMutationInput)
    data!: BucketVisionItemUpdateManyMutationInput;
}
