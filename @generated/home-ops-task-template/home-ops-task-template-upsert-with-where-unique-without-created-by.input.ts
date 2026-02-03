import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateUpdateWithoutCreatedByInput } from './home-ops-task-template-update-without-created-by.input';
import { HomeOpsTaskTemplateCreateWithoutCreatedByInput } from './home-ops-task-template-create-without-created-by.input';

@InputType()
export class HomeOpsTaskTemplateUpsertWithWhereUniqueWithoutCreatedByInput {

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsTaskTemplateUpdateWithoutCreatedByInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateWithoutCreatedByInput)
    update!: HomeOpsTaskTemplateUpdateWithoutCreatedByInput;

    @Field(() => HomeOpsTaskTemplateCreateWithoutCreatedByInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateWithoutCreatedByInput)
    create!: HomeOpsTaskTemplateCreateWithoutCreatedByInput;
}
