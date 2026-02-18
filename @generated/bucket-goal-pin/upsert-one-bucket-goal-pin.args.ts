import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalPinWhereUniqueInput } from './bucket-goal-pin-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalPinCreateInput } from './bucket-goal-pin-create.input';
import { BucketGoalPinUpdateInput } from './bucket-goal-pin-update.input';

@ArgsType()
export class UpsertOneBucketGoalPinArgs {

    @Field(() => BucketGoalPinWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalPinWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalPinWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalPinCreateInput, {nullable:false})
    @Type(() => BucketGoalPinCreateInput)
    create!: BucketGoalPinCreateInput;

    @Field(() => BucketGoalPinUpdateInput, {nullable:false})
    @Type(() => BucketGoalPinUpdateInput)
    update!: BucketGoalPinUpdateInput;
}
