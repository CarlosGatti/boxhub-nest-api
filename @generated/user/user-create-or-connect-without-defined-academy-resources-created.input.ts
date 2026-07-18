import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedAcademyResourcesCreatedInput } from './user-create-without-defined-academy-resources-created.input';

@InputType()
export class UserCreateOrConnectWithoutDefinedAcademyResourcesCreatedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDefinedAcademyResourcesCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedAcademyResourcesCreatedInput)
    create!: UserCreateWithoutDefinedAcademyResourcesCreatedInput;
}
