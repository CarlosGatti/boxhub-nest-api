import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdUpdateWithoutOwnerInput } from './home-ops-household-update-without-owner.input';
import { HomeOpsHouseholdCreateWithoutOwnerInput } from './home-ops-household-create-without-owner.input';

@InputType()
export class HomeOpsHouseholdUpsertWithWhereUniqueWithoutOwnerInput {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutOwnerInput)
    update!: HomeOpsHouseholdUpdateWithoutOwnerInput;

    @Field(() => HomeOpsHouseholdCreateWithoutOwnerInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutOwnerInput)
    create!: HomeOpsHouseholdCreateWithoutOwnerInput;
}
