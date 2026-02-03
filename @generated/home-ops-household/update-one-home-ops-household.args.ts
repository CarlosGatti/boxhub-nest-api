import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdUpdateInput } from './home-ops-household-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';

@ArgsType()
export class UpdateOneHomeOpsHouseholdArgs {

    @Field(() => HomeOpsHouseholdUpdateInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateInput)
    data!: HomeOpsHouseholdUpdateInput;

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;
}
