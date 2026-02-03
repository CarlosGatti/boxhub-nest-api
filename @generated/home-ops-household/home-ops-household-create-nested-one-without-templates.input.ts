import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutTemplatesInput } from './home-ops-household-create-without-templates.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutTemplatesInput } from './home-ops-household-create-or-connect-without-templates.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';

@InputType()
export class HomeOpsHouseholdCreateNestedOneWithoutTemplatesInput {

    @Field(() => HomeOpsHouseholdCreateWithoutTemplatesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutTemplatesInput)
    create?: HomeOpsHouseholdCreateWithoutTemplatesInput;

    @Field(() => HomeOpsHouseholdCreateOrConnectWithoutTemplatesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutTemplatesInput)
    connectOrCreate?: HomeOpsHouseholdCreateOrConnectWithoutTemplatesInput;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;
}
