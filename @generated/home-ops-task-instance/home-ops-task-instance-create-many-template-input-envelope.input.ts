import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateManyTemplateInput } from './home-ops-task-instance-create-many-template.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTaskInstanceCreateManyTemplateInputEnvelope {

    @Field(() => [HomeOpsTaskInstanceCreateManyTemplateInput], {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateManyTemplateInput)
    data!: Array<HomeOpsTaskInstanceCreateManyTemplateInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
