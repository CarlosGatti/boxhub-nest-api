import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutDefinedProposalsCreatedInput } from './user-create-without-defined-proposals-created.input';

@InputType()
export class UserCreateOrConnectWithoutDefinedProposalsCreatedInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserCreateWithoutDefinedProposalsCreatedInput, {nullable:false})
    @Type(() => UserCreateWithoutDefinedProposalsCreatedInput)
    create!: UserCreateWithoutDefinedProposalsCreatedInput;
}
