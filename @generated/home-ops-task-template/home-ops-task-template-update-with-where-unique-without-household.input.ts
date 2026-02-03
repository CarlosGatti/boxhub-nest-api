import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateUpdateWithoutHouseholdInput } from './home-ops-task-template-update-without-household.input';

@InputType()
export class HomeOpsTaskTemplateUpdateWithWhereUniqueWithoutHouseholdInput {

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsTaskTemplateUpdateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateWithoutHouseholdInput)
    data!: HomeOpsTaskTemplateUpdateWithoutHouseholdInput;
}
