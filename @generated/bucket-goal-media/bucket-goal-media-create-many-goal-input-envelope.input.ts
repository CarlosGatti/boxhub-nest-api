import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalMediaCreateManyGoalInput } from './bucket-goal-media-create-many-goal.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketGoalMediaCreateManyGoalInputEnvelope {

    @Field(() => [BucketGoalMediaCreateManyGoalInput], {nullable:false})
    @Type(() => BucketGoalMediaCreateManyGoalInput)
    data!: Array<BucketGoalMediaCreateManyGoalInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
