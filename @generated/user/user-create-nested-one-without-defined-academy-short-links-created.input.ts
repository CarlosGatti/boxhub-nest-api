import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyShortLinksCreatedInput } from './user-create-without-defined-academy-short-links-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyShortLinksCreatedInput } from './user-create-or-connect-without-defined-academy-short-links-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDefinedAcademyShortLinksCreatedInput {

    @Field(() => UserCreateWithoutDefinedAcademyShortLinksCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyShortLinksCreatedInput)
    create?: UserCreateWithoutDefinedAcademyShortLinksCreatedInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyShortLinksCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyShortLinksCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyShortLinksCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
