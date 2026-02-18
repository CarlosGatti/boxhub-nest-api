import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutBucketGoalsInput } from './user-create-without-bucket-goals.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutBucketGoalsInput } from './user-create-or-connect-without-bucket-goals.input';
import { UserUpsertWithoutBucketGoalsInput } from './user-upsert-without-bucket-goals.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutBucketGoalsInput } from './user-update-to-one-with-where-without-bucket-goals.input';

@InputType()
export class UserUpdateOneRequiredWithoutBucketGoalsNestedInput {

    @Field(() => UserCreateWithoutBucketGoalsInput, {nullable:true})
    @Type(() => UserCreateWithoutBucketGoalsInput)
    create?: UserCreateWithoutBucketGoalsInput;

    @Field(() => UserCreateOrConnectWithoutBucketGoalsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutBucketGoalsInput)
    connectOrCreate?: UserCreateOrConnectWithoutBucketGoalsInput;

    @Field(() => UserUpsertWithoutBucketGoalsInput, {nullable:true})
    @Type(() => UserUpsertWithoutBucketGoalsInput)
    upsert?: UserUpsertWithoutBucketGoalsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutBucketGoalsInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutBucketGoalsInput)
    update?: UserUpdateToOneWithWhereWithoutBucketGoalsInput;
}
