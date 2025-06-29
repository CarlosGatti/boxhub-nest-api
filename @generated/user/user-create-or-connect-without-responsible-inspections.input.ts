import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutResponsibleInspectionsInput } from './user-create-without-responsible-inspections.input';

@InputType()
export class UserCreateOrConnectWithoutResponsibleInspectionsInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutResponsibleInspectionsInput, {nullable:false})
    @Type(() => UserCreateWithoutResponsibleInspectionsInput)
    create!: UserCreateWithoutResponsibleInspectionsInput;
}
