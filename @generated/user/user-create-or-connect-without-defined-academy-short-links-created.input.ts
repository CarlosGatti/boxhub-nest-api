import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyShortLinksCreatedInput } from './user-create-without-defined-academy-short-links-created.input';

@InputType()
export class UserCreateOrConnectWithoutDefinedAcademyShortLinksCreatedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDefinedAcademyShortLinksCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyShortLinksCreatedInput)
    create!: UserCreateWithoutDefinedAcademyShortLinksCreatedInput;
}
