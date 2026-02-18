import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueBucketGoalLogOrThrowArgs {

    @Field(() => BucketGoalLogWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalLogWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>;
}
