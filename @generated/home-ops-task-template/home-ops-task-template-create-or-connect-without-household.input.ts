import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateWithoutHouseholdInput } from './home-ops-task-template-create-without-household.input';

@InputType()
export class HomeOpsTaskTemplateCreateOrConnectWithoutHouseholdInput {

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsTaskTemplateCreateWithoutHouseholdInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateWithoutHouseholdInput)
    create!: HomeOpsTaskTemplateCreateWithoutHouseholdInput;
}
