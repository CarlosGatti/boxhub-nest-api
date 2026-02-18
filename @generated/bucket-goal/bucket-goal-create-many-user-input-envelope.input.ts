import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateManyUserInput } from './bucket-goal-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketGoalCreateManyUserInputEnvelope {

    @Field(() => [BucketGoalCreateManyUserInput], {nullable:false})
    @Type(() => BucketGoalCreateManyUserInput)
    data!: Array<BucketGoalCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
