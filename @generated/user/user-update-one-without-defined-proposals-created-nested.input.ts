import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutDefinedProposalsCreatedInput } from './user-create-without-defined-proposals-created.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutDefinedProposalsCreatedInput } from './user-create-or-connect-without-defined-proposals-created.input';
import { UserUpsertWithoutDefinedProposalsCreatedInput } from './user-upsert-without-defined-proposals-created.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutDefinedProposalsCreatedInput } from './user-update-to-one-with-where-without-defined-proposals-created.input';

@InputType()
export class UserUpdateOneWithoutDefinedProposalsCreatedNestedInput {

    @Field(() => UserCreateWithoutDefinedProposalsCreatedInput, {nullable:true})
    @Type(() => UserCreateWithoutDefinedProposalsCreatedInput)
    create?: UserCreateWithoutDefinedProposalsCreatedInput;

    @Field(() => UserCreateOrConnectWithoutDefinedProposalsCreatedInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutDefinedProposalsCreatedInput)
    connectOrCreate?: UserCreateOrConnectWithoutDefinedProposalsCreatedInput;

    @Field(() => UserUpsertWithoutDefinedProposalsCreatedInput, {nullable:true})
    @Type(() => UserUpsertWithoutDefinedProposalsCreatedInput)
    upsert?: UserUpsertWithoutDefinedProposalsCreatedInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email'>;

    @Field(() => UserUpdateToOneWithWhereWithoutDefinedProposalsCreatedInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutDefinedProposalsCreatedInput)
    update?: UserUpdateToOneWithWhereWithoutDefinedProposalsCreatedInput;
}
