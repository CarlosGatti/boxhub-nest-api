import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketGoalCreateWithoutMediaInput } from './bucket-goal-create-without-media.input';
import { Type } from 'class-transformer';
import { BucketGoalCreateOrConnectWithoutMediaInput } from './bucket-goal-create-or-connect-without-media.input';
import { Prisma } from '@prisma/client';
import { BucketGoalWhereUniqueInput } from './bucket-goal-where-unique.input';

@InputType()
export class BucketGoalCreateNestedOneWithoutMediaInput {

    @Field(() => BucketGoalCreateWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalCreateWithoutMediaInput)
    create?: BucketGoalCreateWithoutMediaInput;

    @Field(() => BucketGoalCreateOrConnectWithoutMediaInput, {nullable:true})
    @Type(() => BucketGoalCreateOrConnectWithoutMediaInput)
    connectOrCreate?: BucketGoalCreateOrConnectWithoutMediaInput;

    @Field(() => BucketGoalWhereUniqueInput, {nullable:true})
    @Type(() => BucketGoalWhereUniqueInput)
    connect?: Prisma.AtLeast<BucketGoalWhereUniqueInput, 'id'>;
}
