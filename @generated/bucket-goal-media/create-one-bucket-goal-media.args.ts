import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalMediaCreateInput } from './bucket-goal-media-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBucketGoalMediaArgs {

    @Field(() => BucketGoalMediaCreateInput, {nullable:false})
    @Type(() => BucketGoalMediaCreateInput)
    data!: BucketGoalMediaCreateInput;
}
