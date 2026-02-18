import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalPinUpdateManyMutationInput } from './bucket-goal-pin-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BucketGoalPinWhereInput } from './bucket-goal-pin-where.input';

@ArgsType()
export class UpdateManyBucketGoalPinArgs {

    @Field(() => BucketGoalPinUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketGoalPinUpdateManyMutationInput)
    data!: BucketGoalPinUpdateManyMutationInput;

    @Field(() => BucketGoalPinWhereInput, {nullable:true})
    @Type(() => BucketGoalPinWhereInput)
    where?: BucketGoalPinWhereInput;
}
