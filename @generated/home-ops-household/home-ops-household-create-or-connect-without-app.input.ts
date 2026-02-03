import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutAppInput } from './home-ops-household-create-without-app.input';

@InputType()
export class HomeOpsHouseholdCreateOrConnectWithoutAppInput {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdCreateWithoutAppInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutAppInput)
    create!: HomeOpsHouseholdCreateWithoutAppInput;
}
