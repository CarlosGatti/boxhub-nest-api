import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalLogUpdateInput } from './bucket-goal-log-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';

@ArgsType()
export class UpdateOneBucketGoalLogArgs {

    @Field(() => BucketGoalLogUpdateInput, {nullable:false})
    @Type(() => BucketGoalLogUpdateInput)
    data!: BucketGoalLogUpdateInput;

    @Field(() => BucketGoalLogWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalLogWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>;
}
