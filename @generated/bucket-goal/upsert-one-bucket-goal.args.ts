import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateInput } from './bucket-goal-create.input';
import { BucketGoalUpdateInput } from './bucket-goal-update.input';

@ArgsType()
export class UpsertOneBucketGoalArgs {

    @Field(() => BucketGoalWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalCreateInput, {nullable:false})
    @Type(() => BucketGoalCreateInput)
    create!: BucketGoalCreateInput;

    @Field(() => BucketGoalUpdateInput, {nullable:false})
    @Type(() => BucketGoalUpdateInput)
    update!: BucketGoalUpdateInput;
}
