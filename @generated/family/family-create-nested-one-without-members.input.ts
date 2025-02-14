import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyCreateWithoutMembersInput } from './family-create-without-members.input';
import { Type } from 'class-transformer';
import { FamilyCreateOrConnectWithoutMembersInput } from './family-create-or-connect-without-members.input';
import { Prisma } from '@prisma/client';
import { FamilyWhereUniqueInput } from './family-where-unique.input';

@InputType()
export class FamilyCreateNestedOneWithoutMembersInput {

    @Field(() => FamilyCreateWithoutMembersInput, {nullable:true})
    @Type(() => FamilyCreateWithoutMembersInput)
    create?: FamilyCreateWithoutMembersInput;

    @Field(() => FamilyCreateOrConnectWithoutMembersInput, {nullable:true})
    @Type(() => FamilyCreateOrConnectWithoutMembersInput)
    connectOrCreate?: FamilyCreateOrConnectWithoutMembersInput;

    @Field(() => FamilyWhereUniqueInput, {nullable:true})
    @Type(() => FamilyWhereUniqueInput)
    connect?: Prisma.AtLeast<FamilyWhereUniqueInput, 'id'>;
}
