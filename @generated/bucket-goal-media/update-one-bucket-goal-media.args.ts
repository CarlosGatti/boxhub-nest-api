import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalMediaUpdateInput } from './bucket-goal-media-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';

@ArgsType()
export class UpdateOneBucketGoalMediaArgs {

    @Field(() => BucketGoalMediaUpdateInput, {nullable:false})
    @Type(() => BucketGoalMediaUpdateInput)
    data!: BucketGoalMediaUpdateInput;

    @Field(() => BucketGoalMediaWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>;
}
