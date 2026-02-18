import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalLogCreateInput } from './bucket-goal-log-create.input';
import { BucketGoalLogUpdateInput } from './bucket-goal-log-update.input';

@ArgsType()
export class UpsertOneBucketGoalLogArgs {

    @Field(() => BucketGoalLogWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalLogWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalLogCreateInput, {nullable:false})
    @Type(() => BucketGoalLogCreateInput)
    create!: BucketGoalLogCreateInput;

    @Field(() => BucketGoalLogUpdateInput, {nullable:false})
    @Type(() => BucketGoalLogUpdateInput)
    update!: BucketGoalLogUpdateInput;
}
