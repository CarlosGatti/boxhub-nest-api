import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateWithoutMediaInput } from './bucket-goal-create-without-media.input';

@InputType()
export class BucketGoalCreateOrConnectWithoutMediaInput {

    @Field(() => BucketGoalWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalCreateWithoutMediaInput, {nullable:false})
    @Type(() => BucketGoalCreateWithoutMediaInput)
    create!: BucketGoalCreateWithoutMediaInput;
}
