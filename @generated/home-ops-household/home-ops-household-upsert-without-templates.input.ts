import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdUpdateWithoutTemplatesInput } from './home-ops-household-update-without-templates.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutTemplatesInput } from './home-ops-household-create-without-templates.input';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';

@InputType()
export class HomeOpsHouseholdUpsertWithoutTemplatesInput {

    @Field(() => HomeOpsHouseholdUpdateWithoutTemplatesInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutTemplatesInput)
    update!: HomeOpsHouseholdUpdateWithoutTemplatesInput;

    @Field(() => HomeOpsHouseholdCreateWithoutTemplatesInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutTemplatesInput)
    create!: HomeOpsHouseholdCreateWithoutTemplatesInput;

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;
}
