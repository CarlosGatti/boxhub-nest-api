import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalLogUpdateManyMutationInput } from './bucket-goal-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BucketGoalLogWhereInput } from './bucket-goal-log-where.input';

@ArgsType()
export class UpdateManyBucketGoalLogArgs {

    @Field(() => BucketGoalLogUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketGoalLogUpdateManyMutationInput)
    data!: BucketGoalLogUpdateManyMutationInput;

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    @Type(() => BucketGoalLogWhereInput)
    where?: BucketGoalLogWhereInput;
}
