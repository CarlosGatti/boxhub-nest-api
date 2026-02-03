import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateManyInput } from './home-ops-task-template-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHomeOpsTaskTemplateArgs {

    @Field(() => [HomeOpsTaskTemplateCreateManyInput], {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateManyInput)
    data!: Array<HomeOpsTaskTemplateCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
