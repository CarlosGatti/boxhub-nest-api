import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalPinWhereInput } from './bucket-goal-pin-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBucketGoalPinArgs {

    @Field(() => BucketGoalPinWhereInput, {nullable:true})
    @Type(() => BucketGoalPinWhereInput)
    where?: BucketGoalPinWhereInput;
}
