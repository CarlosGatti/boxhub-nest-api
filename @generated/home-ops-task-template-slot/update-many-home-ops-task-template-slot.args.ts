import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotUpdateManyMutationInput } from './home-ops-task-template-slot-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateSlotWhereInput } from './home-ops-task-template-slot-where.input';

@ArgsType()
export class UpdateManyHomeOpsTaskTemplateSlotArgs {

    @Field(() => HomeOpsTaskTemplateSlotUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotUpdateManyMutationInput)
    data!: HomeOpsTaskTemplateSlotUpdateManyMutationInput;

    @Field(() => HomeOpsTaskTemplateSlotWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateSlotWhereInput)
    where?: HomeOpsTaskTemplateSlotWhereInput;
}
