import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedAcademyResourcesCreatedInput } from './user-create-without-defined-academy-resources-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedAcademyResourcesCreatedInput } from './user-create-or-connect-without-defined-academy-resources-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDefinedAcademyResourcesCreatedInput {

    @Field(() => UserCreateWithoutDefinedAcademyResourcesCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedAcademyResourcesCreatedInput)
    create?: UserCreateWithoutDefinedAcademyResourcesCreatedInput;

    @Field(() => UserCreateOrConnectWithoutDefinedAcademyResourcesCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedAcademyResourcesCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedAcademyResourcesCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
