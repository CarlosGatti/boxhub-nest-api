import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateUpdateManyMutationInput } from './home-ops-task-template-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateWhereInput } from './home-ops-task-template-where.input';

@ArgsType()
export class UpdateManyHomeOpsTaskTemplateArgs {

    @Field(() => HomeOpsTaskTemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateManyMutationInput)
    data!: HomeOpsTaskTemplateUpdateManyMutationInput;

    @Field(() => HomeOpsTaskTemplateWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskTemplateWhereInput)
    where?: HomeOpsTaskTemplateWhereInput;
}
