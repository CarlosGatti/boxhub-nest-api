import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateWhereInput } from './home-ops-task-template-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateUpdateWithoutSlotsInput } from './home-ops-task-template-update-without-slots.input';

@InputType()
export class HomeOpsTaskTemplateUpdateToOneWithWhereWithoutSlotsInput {

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereInput)
    where?: HomeOpsTaskTemplateWhereInput;

    @Field(() => HomeOpsTaskTemplateUpdateWithoutSlotsInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateWithoutSlotsInput)
    data!: HomeOpsTaskTemplateUpdateWithoutSlotsInput;
}
