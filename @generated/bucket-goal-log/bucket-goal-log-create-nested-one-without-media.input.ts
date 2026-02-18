import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalLogCreateWithoutMediaInput } from './bucket-goal-log-create-without-media.input';
import { Type } from 'class-transformer';
import { BucketGoalLogCreateOrConnectWithoutMediaInput } from './bucket-goal-log-create-or-connect-without-media.input';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';

@InputType()
export class BucketGoalLogCreateNestedOneWithoutMediaInput {

    @Field(() => BucketGoalLogCreateWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalLogCreateWithoutMediaInput)
    create?: BucketGoalLogCreateWithoutMediaInput;

    @Field(() => BucketGoalLogCreateOrConnectWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalLogCreateOrConnectWithoutMediaInput)
    connectOrCreate?: BucketGoalLogCreateOrConnectWithoutMediaInput;

    @Field(() => BucketGoalLogWhereUniqueInput, {nullable:true})
    @Type(() => BucketGoalLogWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>;
}
