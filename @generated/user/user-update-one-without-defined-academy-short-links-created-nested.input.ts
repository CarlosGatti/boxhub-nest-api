import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyShortLinksCreatedInput } from './user-create-without-defined-academy-short-links-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyShortLinksCreatedInput } from './user-create-or-connect-without-defined-academy-short-links-created.input';
import { UserUpsertWithoutDefinedAcademyShortLinksCreatedInput } from './user-upsert-without-defined-academy-short-links-created.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDefinedAcademyShortLinksCreatedInput } from './user-update-to-one-with-where-without-defined-academy-short-links-created.input';

@InputType()
export class UserUpdateOneWithoutDefinedAcademyShortLinksCreatedNestedInput {

    @Field(() => UserCreateWithoutDefinedAcademyShortLinksCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyShortLinksCreatedInput)
    create?: UserCreateWithoutDefinedAcademyShortLinksCreatedInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyShortLinksCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyShortLinksCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyShortLinksCreatedInput;

    @Field(() => UserUpsertWithoutDefinedAcademyShortLinksCreatedInput, {nullable:true})
    @Type(() => UserUpsertWithoutDefinedAcademyShortLinksCreatedInput)
    upsert?: UserUpsertWithoutDefinedAcademyShortLinksCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDefinedAcademyShortLinksCreatedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDefinedAcademyShortLinksCreatedInput)
    update?: UserUpdateToOneWithWhereWithoutDefinedAcademyShortLinksCreatedInput;
}
