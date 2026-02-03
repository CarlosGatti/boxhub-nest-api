import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateInput } from './home-ops-task-template-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHomeOpsTaskTemplateArgs {

    @Field(() => HomeOpsTaskTemplateCreateInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateInput)
    data!: HomeOpsTaskTemplateCreateInput;
}
