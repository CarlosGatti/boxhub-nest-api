import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdUpdateWithoutOwnerInput } from './home-ops-household-update-without-owner.input';

@InputType()
export class HomeOpsHouseholdUpdateWithWhereUniqueWithoutOwnerInput {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdUpdateWithoutOwnerInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutOwnerInput)
    data!: HomeOpsHouseholdUpdateWithoutOwnerInput;
}
