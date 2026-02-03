import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsHouseholdWhereUniqueInput } from './home-ops-household-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdUpdateWithoutAppInput } from './home-ops-household-update-without-app.input';

@InputType()
export class HomeOpsHouseholdUpdateWithWhereUniqueWithoutAppInput {

    @Field(() => HomeOpsHouseholdWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsHouseholdWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsHouseholdWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsHouseholdUpdateWithoutAppInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutAppInput)
    data!: HomeOpsHouseholdUpdateWithoutAppInput;
}
