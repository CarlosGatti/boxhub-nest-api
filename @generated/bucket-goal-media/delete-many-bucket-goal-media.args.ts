import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalMediaWhereInput } from './bucket-goal-media-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBucketGoalMediaArgs {

    @Field(() => BucketGoalMediaWhereInput, {nullable:true})
    @Type(() => BucketGoalMediaWhereInput)
    where?: BucketGoalMediaWhereInput;
}
