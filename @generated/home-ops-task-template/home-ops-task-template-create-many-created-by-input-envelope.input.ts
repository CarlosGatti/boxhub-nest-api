import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateManyCreatedByInput } from './home-ops-task-template-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTaskTemplateCreateManyCreatedByInputEnvelope {

    @Field(() => [HomeOpsTaskTemplateCreateManyCreatedByInput], {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateManyCreatedByInput)
    data!: Array<HomeOpsTaskTemplateCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
