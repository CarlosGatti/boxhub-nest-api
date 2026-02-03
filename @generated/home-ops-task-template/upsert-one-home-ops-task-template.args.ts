import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskTemplateWhereUniqueInput } from './home-ops-task-template-where-unique.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateInput } from './home-ops-task-template-create.input';
import { HomeOpsTaskTemplateUpdateInput } from './home-ops-task-template-update.input';

@ArgsType()
export class UpsertOneHomeOpsTaskTemplateArgs {

    @Field(() => HomeOpsTaskTemplateWhereUniqueInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateWhereUniqueInput)
    where!: Prisma.AtLeast<HomeOpsTaskTemplateWhereUniqueInput, 'id'>;

    @Field(() => HomeOpsTaskTemplateCreateInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateInput)
    create!: HomeOpsTaskTemplateCreateInput;

    @Field(() => HomeOpsTaskTemplateUpdateInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateInput)
    update!: HomeOpsTaskTemplateUpdateInput;
}
