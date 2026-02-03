import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotCreateManyTemplateInput } from './home-ops-task-template-slot-create-many-template.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTaskTemplateSlotCreateManyTemplateInputEnvelope {

    @Field(() => [HomeOpsTaskTemplateSlotCreateManyTemplateInput], {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotCreateManyTemplateInput)
    data!: Array<HomeOpsTaskTemplateSlotCreateManyTemplateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
