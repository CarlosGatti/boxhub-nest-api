import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalScalarWhereInput } from './bucket-goal-scalar-where.input';
import { Type } from 'class-transformer';
import { BucketGoalUpdateManyMutationInput } from './bucket-goal-update-many-mutation.input';

@InputType()
export class BucketGoalUpdateManyWithWhereWithoutUserInput {

    @Field(() => BucketGoalScalarWhereInput, {nullable:false})
    @Type(() => BucketGoalScalarWhereInput)
    where!: BucketGoalScalarWhereInput;

    @Field(() => BucketGoalUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketGoalUpdateManyMutationInput)
    data!: BucketGoalUpdateManyMutationInput;
}
