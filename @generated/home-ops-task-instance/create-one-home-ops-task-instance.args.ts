import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateInput } from './home-ops-task-instance-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHomeOpsTaskInstanceArgs {

    @Field(() => HomeOpsTaskInstanceCreateInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateInput)
    data!: HomeOpsTaskInstanceCreateInput;
}
