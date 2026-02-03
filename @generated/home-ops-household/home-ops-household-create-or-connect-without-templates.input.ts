import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutTemplatesInput } from './home-ops-household-create-without-templates.input';

@InputType()
export class HomeOpsHouseholdCreateOrConnectWithoutTemplatesInput {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdCreateWithoutTemplatesInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutTemplatesInput)
    create!: HomeOpsHouseholdCreateWithoutTemplatesInput;
}
