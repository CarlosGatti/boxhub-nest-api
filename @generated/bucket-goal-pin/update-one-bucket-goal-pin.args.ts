import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalPinUpdateInput } from './bucket-goal-pin-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BucketGoalPinWhereUniqueInput } from './bucket-goal-pin-where-unique.input';

@ArgsType()
export class UpdateOneBucketGoalPinArgs {

    @Field(() => BucketGoalPinUpdateInput, {nullable:false})
    @Type(() => BucketGoalPinUpdateInput)
    data!: BucketGoalPinUpdateInput;

    @Field(() => BucketGoalPinWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalPinWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalPinWhereUniqueInput, 'id'>;
}
