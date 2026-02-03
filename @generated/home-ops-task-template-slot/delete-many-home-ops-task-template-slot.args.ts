import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotWhereInput } from './home-ops-task-template-slot-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHomeOpsTaskTemplateSlotArgs {

    @Field(() => HomeOpsTaskTemplateSlotWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotWhereInput)
    where?: HomeOpsTaskTemplateSlotWhereInput;
}
