import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceUpdateManyMutationInput } from './home-ops-task-instance-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceWhereInput } from './home-ops-task-instance-where.input';

@ArgsType()
export class UpdateManyHomeOpsTaskInstanceArgs {

    @Field(() => HomeOpsTaskInstanceUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsTaskInstanceUpdateManyMutationInput)
    data!: HomeOpsTaskInstanceUpdateManyMutationInput;

    @Field(() => HomeOpsTaskInstanceWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereInput)
    where?: HomeOpsTaskInstanceWhereInput;
}
