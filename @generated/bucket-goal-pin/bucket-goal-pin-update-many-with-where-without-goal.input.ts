import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalPinScalarWhereInput } from './bucket-goal-pin-scalar-where.input';
import { Type } from 'class-transformer';
import { BucketGoalPinUpdateManyMutationInput } from './bucket-goal-pin-update-many-mutation.input';

@InputType()
export class BucketGoalPinUpdateManyWithWhereWithoutGoalInput {

    @Field(() => BucketGoalPinScalarWhereInput, {nullable:false})
    @Type(() => BucketGoalPinScalarWhereInput)
    where!: BucketGoalPinScalarWhereInput;

    @Field(() => BucketGoalPinUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketGoalPinUpdateManyMutationInput)
    data!: BucketGoalPinUpdateManyMutationInput;
}
