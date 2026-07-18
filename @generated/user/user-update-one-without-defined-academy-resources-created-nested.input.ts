import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyResourcesCreatedInput } from './user-create-without-defined-academy-resources-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyResourcesCreatedInput } from './user-create-or-connect-without-defined-academy-resources-created.input';
import { UserUpsertWithoutDefinedAcademyResourcesCreatedInput } from './user-upsert-without-defined-academy-resources-created.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDefinedAcademyResourcesCreatedInput } from './user-update-to-one-with-where-without-defined-academy-resources-created.input';

@InputType()
export class UserUpdateOneWithoutDefinedAcademyResourcesCreatedNestedInput {

    @Field(() => UserCreateWithoutDefinedAcademyResourcesCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyResourcesCreatedInput)
    create?: UserCreateWithoutDefinedAcademyResourcesCreatedInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyResourcesCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyResourcesCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyResourcesCreatedInput;

    @Field(() => UserUpsertWithoutDefinedAcademyResourcesCreatedInput, {nullable:true})
    @Type(() => UserUpsertWithoutDefinedAcademyResourcesCreatedInput)
    upsert?: UserUpsertWithoutDefinedAcademyResourcesCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDefinedAcademyResourcesCreatedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDefinedAcademyResourcesCreatedInput)
    update?: UserUpdateToOneWithWhereWithoutDefinedAcademyResourcesCreatedInput;
}
