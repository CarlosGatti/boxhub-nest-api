import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutOwnerInput } from './home-ops-household-create-without-owner.input';

@InputType()
export class HomeOpsHouseholdCreateOrConnectWithoutOwnerInput {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdCreateWithoutOwnerInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutOwnerInput)
    create!: HomeOpsHouseholdCreateWithoutOwnerInput;
}
