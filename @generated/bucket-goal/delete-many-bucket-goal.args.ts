import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalWhereInput } from './bucket-goal-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBucketGoalArgs {

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    where?: BucketGoalWhereInput;
}
