import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateUpdateWithoutHouseholdInput } from './home-ops-task-template-update-without-household.input';
import { HomeOpsTaskTemplateCreateWithoutHouseholdInput } from './home-ops-task-template-create-without-household.input';

@InputType()
export class HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutHouseholdInput {

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsTaskTemplateUpdateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateWithoutHouseholdInput)
    update!: HomeOpsTaskTemplateUpdateWithoutHouseholdInput;

    @Field(() => HomeOpsTaskTemplateCreateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateWithoutHouseholdInput)
    create!: HomeOpsTaskTemplateCreateWithoutHouseholdInput;
}
