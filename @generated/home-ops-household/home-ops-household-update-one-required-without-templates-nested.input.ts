import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateWithoutTemplatesInput } from './home-ops-household-create-without-templates.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateOrConnectWithoutTemplatesInput } from './home-ops-household-create-or-connect-without-templates.input';
import { HomeOpsHouseholdUpsertWithoutTemplatesInput } from './home-ops-household-upsert-without-templates.input';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { HomeOpsHouseholdUpdateToOneWithWhereWithoutTemplatesInput } from './home-ops-household-update-to-one-with-where-without-templates.input';

@InputType()
export class HomeOpsHouseholdUpdateOneRequiredWithoutTemplatesNestedInput {

    @Field(() => HomeOpsHouseholdCreateWithoutTemplatesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateWithoutTemplatesInput)
    create?: HomeOpsHouseholdCreateWithoutTemplatesInput;

    @Field(() => HomeOpsHouseholdCreateOrConnectWithoutTemplatesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdCreateOrConnectWithoutTemplatesInput)
    connectOrCreate?: HomeOpsHouseholdCreateOrConnectWithoutTemplatesInput;

    @Field(() => HomeOpsHouseholdUpsertWithoutTemplatesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdUpsertWithoutTemplatesInput)
    upsert?: HomeOpsHouseholdUpsertWithoutTemplatesInput;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    connect?: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdUpdateToOneWithWhereWithoutTemplatesInput, {nullable:true})
    @Type(() => HomeOpsHouseholdUpdateToOneWithWhereWithoutTemplatesInput)
    update?: HomeOpsHouseholdUpdateToOneWithWhereWithoutTemplatesInput;
}
