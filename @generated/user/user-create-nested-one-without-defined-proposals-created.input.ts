import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedProposalsCreatedInput } from './user-create-without-defined-proposals-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedProposalsCreatedInput } from './user-create-or-connect-without-defined-proposals-created.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutDefinedProposalsCreatedInput {

    @Field(() => UserCreateWithoutDefinedProposalsCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedProposalsCreatedInput)
    create?: UserCreateWithoutDefinedProposalsCreatedInput;

    @Field(() => UserCreateOrConnectWithoutDefinedProposalsCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedProposalsCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedProposalsCreatedInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;
}
