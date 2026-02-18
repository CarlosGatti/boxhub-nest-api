import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateWithoutMediaInput } from './bucket-goal-create-without-media.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateOrConnectWithoutMediaInput } from './bucket-goal-create-or-connect-without-media.input';
import { BucketGoalUpsertWithoutMediaInput } from './bucket-goal-upsert-without-media.input';
import { BucketGoalWhereInput } from './bucket-goal-where.input';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';
import { BucketGoalUpdateToOneWithWhereWithoutMediaInput } from './bucket-goal-update-to-one-with-where-without-media.input';

@InputType()
export class BucketGoalUpdateOneWithoutMediaNestedInput {

    @Field(() => BucketGoalCreateWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalCreateWithoutMediaInput)
    create?: BucketGoalCreateWithoutMediaInput;

    @Field(() => BucketGoalCreateOrConnectWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalCreateOrConnectWithoutMediaInput)
    connectOrCreate?: BucketGoalCreateOrConnectWithoutMediaInput;

    @Field(() => BucketGoalUpsertWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalUpsertWithoutMediaInput)
    upsert?: BucketGoalUpsertWithoutMediaInput;

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    disconnect?: BucketGoalWhereInput;

    @Field(() => BucketGoalWhereInput, {nullable:true})
    @Type(() => BucketGoalWhereInput)
    delete?: BucketGoalWhereInput;

    @Field(() => BucketGoalWhereUniqueInput, {nullable:true})
    @Type(() => BucketGoalWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;

    @Field(() => BucketGoalUpdateToOneWithWhereWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalUpdateToOneWithWhereWithoutMediaInput)
    update?: BucketGoalUpdateToOneWithWhereWithoutMediaInput;
}
