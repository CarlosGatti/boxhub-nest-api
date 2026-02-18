import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneBucketGoalMediaArgs {

    @Field(() => BucketGoalMediaWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>;
}
