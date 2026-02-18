import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalMediaWhereUniqueInput } from './bucket-goal-media-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalMediaCreateWithoutLogInput } from './bucket-goal-media-create-without-log.input';

@InputType()
export class BucketGoalMediaCreateOrConnectWithoutLogInput {

    @Field(() => BucketGoalMediaWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalMediaWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalMediaWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalMediaCreateWithoutLogInput, {nullable:false})
    @Type(() => BucketGoalMediaCreateWithoutLogInput)
    create!: BucketGoalMediaCreateWithoutLogInput;
}
