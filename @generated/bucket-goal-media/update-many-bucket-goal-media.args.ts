import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalMediaUpdateManyMutationInput } from './bucket-goal-media-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaWhereInput } from './bucket-goal-media-where.input';

@ArgsType()
export class UpdateManyBucketGoalMediaArgs {

    @Field(() => BucketGoalMediaUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketGoalMediaUpdateManyMutationInput)
    data!: BucketGoalMediaUpdateManyMutationInput;

    @Field(() => BucketGoalMediaWhereInput, {nullable:true})
    @Type(() => BucketGoalMediaWhereInput)
    where?: BucketGoalMediaWhereInput;
}
