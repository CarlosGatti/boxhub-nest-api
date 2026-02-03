import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceWhereInput } from './home-ops-task-instance-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyHomeOpsTaskInstanceArgs {

    @Field(() => HomeOpsTaskInstanceWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereInput)
    where?: HomeOpsTaskInstanceWhereInput;
}
