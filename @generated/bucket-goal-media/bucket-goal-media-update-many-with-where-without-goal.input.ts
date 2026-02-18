import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalMediaScalarWhereInput } from './bucket-goal-media-scalar-where.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaUpdateManyMutationInput } from './bucket-goal-media-update-many-mutation.input';

@InputType()
export class BucketGoalMediaUpdateManyWithWhereWithoutGoalInput {

    @Field(() => BucketGoalMediaScalarWhereInput, {nullable:false})
    @Type(() => BucketGoalMediaScalarWhereInput)
    where!: BucketGoalMediaScalarWhereInput;

    @Field(() => BucketGoalMediaUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketGoalMediaUpdateManyMutationInput)
    data!: BucketGoalMediaUpdateManyMutationInput;
}
