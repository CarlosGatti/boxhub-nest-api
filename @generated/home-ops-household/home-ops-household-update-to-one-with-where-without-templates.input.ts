import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdUpdateWithoutTemplatesInput } from './home-ops-household-update-without-templates.input';

@InputType()
export class HomeOpsHouseholdUpdateToOneWithWhereWithoutTemplatesInput {

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;

    @Field(() => HomeOpsHouseholdUpdateWithoutTemplatesInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutTemplatesInput)
    data!: HomeOpsHouseholdUpdateWithoutTemplatesInput;
}
