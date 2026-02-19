import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionCheckinScalarWhereInput } from './bucket-vision-checkin-scalar-where.input';
import { Type } from 'class-transformer';
import { BucketVisionCheckinUpdateManyMutationInput } from './bucket-vision-checkin-update-many-mutation.input';

@InputType()
export class BucketVisionCheckinUpdateManyWithWhereWithoutBoardInput {

    @Field(() => BucketVisionCheckinScalarWhereInput, {nullable:false})
    @Type(() => BucketVisionCheckinScalarWhereInput)
    where!: BucketVisionCheckinScalarWhereInput;

    @Field(() => BucketVisionCheckinUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketVisionCheckinUpdateManyMutationInput)
    data!: BucketVisionCheckinUpdateManyMutationInput;
}
