import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateScalarWhereInput } from './home-ops-task-template-scalar-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskTemplateUpdateManyMutationInput } from './home-ops-task-template-update-many-mutation.input';

@InputType()
export class HomeOpsTaskTemplateUpdateManyWithWhereWithoutHouseholdInput {

    @Field(() => HomeOpsTaskTemplateScalarWhereInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateScalarWhereInput)
    where!: HomeOpsTaskTemplateScalarWhereInput;

    @Field(() => HomeOpsTaskTemplateUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsTaskTemplateUpdateManyMutationInput)
    data!: HomeOpsTaskTemplateUpdateManyMutationInput;
}
