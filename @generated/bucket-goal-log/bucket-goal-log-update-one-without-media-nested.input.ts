import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalLogCreateWithoutMediaInput } from './bucket-goal-log-create-without-media.input';
import { Type } from 'class-transformer';
import { BucketGoalLogCreateOrConnectWithoutMediaInput } from './bucket-goal-log-create-or-connect-without-media.input';
import { BucketGoalLogUpsertWithoutMediaInput } from './bucket-goal-log-upsert-without-media.input';
import { BucketGoalLogWhereInput } from './bucket-goal-log-where.input';
import { Prisma } from '@prisma/client';
import { BucketGoalLogWhereUniqueInput } from './bucket-goal-log-where-unique.input';
import { BucketGoalLogUpdateToOneWithWhereWithoutMediaInput } from './bucket-goal-log-update-to-one-with-where-without-media.input';

@InputType()
export class BucketGoalLogUpdateOneWithoutMediaNestedInput {

    @Field(() => BucketGoalLogCreateWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalLogCreateWithoutMediaInput)
    create?: BucketGoalLogCreateWithoutMediaInput;

    @Field(() => BucketGoalLogCreateOrConnectWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalLogCreateOrConnectWithoutMediaInput)
    connectOrCreate?: BucketGoalLogCreateOrConnectWithoutMediaInput;

    @Field(() => BucketGoalLogUpsertWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalLogUpsertWithoutMediaInput)
    upsert?: BucketGoalLogUpsertWithoutMediaInput;

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    @Type(() => BucketGoalLogWhereInput)
    disconnect?: BucketGoalLogWhereInput;

    @Field(() => BucketGoalLogWhereInput, {nullable:true})
    @Type(() => BucketGoalLogWhereInput)
    delete?: BucketGoalLogWhereInput;

    @Field(() => BucketGoalLogWhereUniqueInput, {nullable:true})
    @Type(() => BucketGoalLogWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketGoalLogWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalLogUpdateToOneWithWhereWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalLogUpdateToOneWithWhereWithoutMediaInput)
    update?: BucketGoalLogUpdateToOneWithWhereWithoutMediaInput;
}
