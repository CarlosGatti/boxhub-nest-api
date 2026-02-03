import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateUpdateWithoutSlotsInput } from './home-ops-task-template-update-without-slots.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateCreateWithoutSlotsInput } from './home-ops-task-template-create-without-slots.input';
import { HomeOpsTaskTemplateWhereInput } from './home-ops-task-template-where.input';

@InputType()
export class HomeOpsTaskTemplateUpsertWithoutSlotsInput {

    @Field(() => HomeOpsTaskTemplateUpdateWithoutSlotsInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateWithoutSlotsInput)
    update!: HomeOpsTaskTemplateUpdateWithoutSlotsInput;

    @Field(() => HomeOpsTaskTemplateCreateWithoutSlotsInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateWithoutSlotsInput)
    create!: HomeOpsTaskTemplateCreateWithoutSlotsInput;

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereInput)
    where?: HomeOpsTaskTemplateWhereInput;
}
