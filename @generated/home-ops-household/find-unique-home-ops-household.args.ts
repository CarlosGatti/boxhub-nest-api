import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueHomeOpsHouseholdArgs {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;
}
