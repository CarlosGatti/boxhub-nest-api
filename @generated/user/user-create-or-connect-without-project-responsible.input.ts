import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutProjectResponsibleInput } from './user-create-without-project-responsible.input';

@InputType()
export class UserCreateOrConnectWithoutProjectResponsibleInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutProjectResponsibleInput, {nullable:false})
    @Type(() => UserCreateWithoutProjectResponsibleInput)
    create!: UserCreateWithoutProjectResponsibleInput;
}
