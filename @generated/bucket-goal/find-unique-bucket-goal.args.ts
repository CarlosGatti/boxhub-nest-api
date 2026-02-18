import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBucketGoalArgs {

    @Field(() => BucketGoalWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;
}
