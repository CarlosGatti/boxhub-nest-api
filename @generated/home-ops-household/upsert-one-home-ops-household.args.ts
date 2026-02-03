import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateInput } from './home-ops-household-create.input';
import { HomeOpsHouseholdUpdateInput } from './home-ops-household-update.input';

@ArgsType()
export class UpsertOneHomeOpsHouseholdArgs {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdCreateInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateInput)
    create!: HomeOpsHouseholdCreateInput;

    @Field(() => HomeOpsHouseholdUpdateInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateInput)
    update!: HomeOpsHouseholdUpdateInput;
}
