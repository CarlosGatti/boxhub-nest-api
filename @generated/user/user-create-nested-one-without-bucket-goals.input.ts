import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBucketGoalsInput } from './user-create-without-bucket-goals.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBucketGoalsInput } from './user-create-or-connect-without-bucket-goals.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutBucketGoalsInput {

    @Field(() => UserCreateWithoutBucketGoalsInput, {nullable:true})
    @Type(() => UserCreateWithoutBucketGoalsInput)
    create?: UserCreateWithoutBucketGoalsInput;

    @Field(() => UserCreateOrConnectWithoutBucketGoalsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBucketGoalsInput)
    connectOrCreate?: UserCreateOrConnectWithoutBucketGoalsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
