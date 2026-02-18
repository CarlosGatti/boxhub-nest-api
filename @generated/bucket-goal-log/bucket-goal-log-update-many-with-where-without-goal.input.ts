import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalLogScalarWhereInput } from './bucket-goal-log-scalar-where.input';
import { Type } from 'class-transformer';
import { BucketGoalLogUpdateManyMutationInput } from './bucket-goal-log-update-many-mutation.input';

@InputType()
export class BucketGoalLogUpdateManyWithWhereWithoutGoalInput {

    @Field(() => BucketGoalLogScalarWhereInput, {nullable:false})
    @Type(() => BucketGoalLogScalarWhereInput)
    where!: BucketGoalLogScalarWhereInput;

    @Field(() => BucketGoalLogUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketGoalLogUpdateManyMutationInput)
    data!: BucketGoalLogUpdateManyMutationInput;
}
