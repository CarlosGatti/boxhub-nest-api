import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalUpdateWithoutUserInput } from './bucket-goal-update-without-user.input';

@InputType()
export class BucketGoalUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => BucketGoalWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalUpdateWithoutUserInput, {nullable:false})
    @Type(() => BucketGoalUpdateWithoutUserInput)
    data!: BucketGoalUpdateWithoutUserInput;
}
