import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalUpdateManyMutationInput } from './bucket-goal-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BucketGoalWhereInput } from './bucket-goal-where.input';

@ArgsType()
export class UpdateManyBucketGoalArgs {

    @Field(() => BucketGoalUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketGoalUpdateManyMutationInput)
    data!: BucketGoalUpdateManyMutationInput;

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;
}
