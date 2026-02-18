import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalUpdateWithoutUserInput } from './bucket-goal-update-without-user.input';
import { BucketGoalCreateWithoutUserInput } from './bucket-goal-create-without-user.input';

@InputType()
export class BucketGoalUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => BucketGoalWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalUpdateWithoutUserInput, {nullable:false})
    @Type(() => BucketGoalUpdateWithoutUserInput)
    update!: BucketGoalUpdateWithoutUserInput;

    @Field(() => BucketGoalCreateWithoutUserInput, {nullable:false})
    @Type(() => BucketGoalCreateWithoutUserInput)
    create!: BucketGoalCreateWithoutUserInput;
}
