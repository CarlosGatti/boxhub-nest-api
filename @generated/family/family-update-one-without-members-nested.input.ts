import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateWithoutMembersInput } from './family-create-without-members.input';
import { Type } from 'class-transformer';
import { FamilyCreateOrConnectWithoutMembersInput } from './family-create-or-connect-without-members.input';
import { FamilyUpsertWithoutMembersInput } from './family-upsert-without-members.input';
import { FamilyWhereInput } from './family-where.input';
import { Prisma } from '@prisma/client';
import { FamilyWhereUniqueInput } from './family-where-unique.input';
import { FamilyUpdateToOneWithWhereWithoutMembersInput } from './family-update-to-one-with-where-without-members.input';

@InputType()
export class FamilyUpdateOneWithoutMembersNestedInput {

    @Field(() => FamilyCreateWithoutMembersInput, {nullable:true})
    @Type(() => FamilyCreateWithoutMembersInput)
    create?: FamilyCreateWithoutMembersInput;

    @Field(() => FamilyCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => FamilyCreateOrConnectWithoutMembersInput)
    connectOrCreate?: FamilyCreateOrConnectWithoutMembersInput;

    @Field(() => FamilyUpsertWithoutMembersInput, {nullable:true})
    @Type(() => FamilyUpsertWithoutMembersInput)
    upsert?: FamilyUpsertWithoutMembersInput;

    @Field(() => FamilyWhereInput, {nullable:true})
    @Type(() => FamilyWhereInput)
    disconnect?: FamilyWhereInput;

    @Field(() => FamilyWhereInput, {nullable:true})
    @Type(() => FamilyWhereInput)
    delete?: FamilyWhereInput;

    @Field(() => FamilyWhereUniqueInput, {nullable:true})
    @Type(() => FamilyWhereUniqueInput)
    connect?: Prisma.AtLeast<FamilyWhereUniqueInput, 'id'>;

    @Field(() => FamilyUpdateToOneWithWhereWithoutMembersInput, {nullable:true})
    @Type(() => FamilyUpdateToOneWithWhereWithoutMembersInput)
    update?: FamilyUpdateToOneWithWhereWithoutMembersInput;
}
