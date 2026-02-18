import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutBucketGoalsInput } from './user-create-without-bucket-goals.input';

@InputType()
export class UserCreateOrConnectWithoutBucketGoalsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutBucketGoalsInput, {nullable:false})
    @Type(() => UserCreateWithoutBucketGoalsInput)
    create!: UserCreateWithoutBucketGoalsInput;
}
