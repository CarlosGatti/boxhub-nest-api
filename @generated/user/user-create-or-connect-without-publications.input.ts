import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutPublicationsInput } from './user-create-without-publications.input';

@InputType()
export class UserCreateOrConnectWithoutPublicationsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutPublicationsInput, {nullable:false})
    @Type(() => UserCreateWithoutPublicationsInput)
    create!: UserCreateWithoutPublicationsInput;
}
