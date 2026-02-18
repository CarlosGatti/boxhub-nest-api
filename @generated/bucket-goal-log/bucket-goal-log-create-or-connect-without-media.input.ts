import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';
import { Type } from 'class-transformer';
import { BucketGoalLogCreateWithoutMediaInput } from './bucket-goal-log-create-without-media.input';

@InputType()
export class BucketGoalLogCreateOrConnectWithoutMediaInput {

    @Field(() => BucketGoalLogWhereUniqueInput, {nullable:false})
    @Type(() => BucketGoalLogWhereUniqueInput)
    where!: Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalLogCreateWithoutMediaInput, {nullable:false})
    @Type(() => BucketGoalLogCreateWithoutMediaInput)
    create!: BucketGoalLogCreateWithoutMediaInput;
}
