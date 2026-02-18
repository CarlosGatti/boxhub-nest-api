import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaCreateInput } from './bucket-goal-media-create.input';
import { BucketGoalMediaUpdateInput } from './bucket-goal-media-update.input';

@ArgsType()
export class UpsertOneBucketGoalMediaArgs {

    @Field(() => BucketGoalMediaWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalMediaCreateInput, {nullable:false})
    @Type(() => BucketGoalMediaCreateInput)
    create!: BucketGoalMediaCreateInput;

    @Field(() => BucketGoalMediaUpdateInput, {nullable:false})
    @Type(() => BucketGoalMediaUpdateInput)
    update!: BucketGoalMediaUpdateInput;
}
