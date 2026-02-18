import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaUpdateWithoutLogInput } from './bucket-goal-media-update-without-log.input';

@InputType()
export class BucketGoalMediaUpdateWithWhereUniqueWithoutLogInput {

    @Field(() => BucketGoalMediaWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalMediaUpdateWithoutLogInput, {nullable:false})
    @Type(() => BucketGoalMediaUpdateWithoutLogInput)
    data!: BucketGoalMediaUpdateWithoutLogInput;
}
