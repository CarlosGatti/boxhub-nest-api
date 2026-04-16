import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedInternalNotesInput } from './user-create-without-defined-internal-notes.input';

@InputType()
export class UserCreateOrConnectWithoutDefinedInternalNotesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDefinedInternalNotesInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedInternalNotesInput)
    create!: UserCreateWithoutDefinedInternalNotesInput;
}
