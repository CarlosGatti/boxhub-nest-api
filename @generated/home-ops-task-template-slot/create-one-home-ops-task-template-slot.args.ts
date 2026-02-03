import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotCreateInput } from './home-ops-task-template-slot-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHomeOpsTaskTemplateSlotArgs {

    @Field(() => HomeOpsTaskTemplateSlotCreateInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotCreateInput)
    data!: HomeOpsTaskTemplateSlotCreateInput;
}
