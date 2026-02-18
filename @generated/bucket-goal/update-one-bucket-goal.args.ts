import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketGoalUpdateInput } from './bucket-goal-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';

@ArgsType()
export class UpdateOneBucketGoalArgs {

    @Field(() => BucketGoalUpdateInput, {nullable:false})
    @Type(() => BucketGoalUpdateInput)
    data!: BucketGoalUpdateInput;

    @Field(() => BucketGoalWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;
}
