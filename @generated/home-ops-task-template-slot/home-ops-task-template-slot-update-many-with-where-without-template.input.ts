import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotScalarWhereInput } from './home-ops-task-template-slot-scalar-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateSlotUpdateManyMutationInput } from './home-ops-task-template-slot-update-many-mutation.input';

@InputType()
export class HomeOpsTaskTemplateSlotUpdateManyWithWhereWithoutTemplateInput {

    @Field(() => HomeOpsTaskTemplateSlotScalarWhereInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotScalarWhereInput)
    where!: HomeOpsTaskTemplateSlotScalarWhereInput;

    @Field(() => HomeOpsTaskTemplateSlotUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotUpdateManyMutationInput)
    data!: HomeOpsTaskTemplateSlotUpdateManyMutationInput;
}
