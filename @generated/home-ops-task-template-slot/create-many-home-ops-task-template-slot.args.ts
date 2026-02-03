import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateSlotCreateManyInput } from './home-ops-task-template-slot-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHomeOpsTaskTemplateSlotArgs {

    @Field(() => [HomeOpsTaskTemplateSlotCreateManyInput], {nullable:false})
    @Type(() => HomeOpsTaskTemplateSlotCreateManyInput)
    data!: Array<HomeOpsTaskTemplateSlotCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
