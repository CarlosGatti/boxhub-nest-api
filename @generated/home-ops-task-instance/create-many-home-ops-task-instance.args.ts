import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateManyInput } from './home-ops-task-instance-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHomeOpsTaskInstanceArgs {

    @Field(() => [HomeOpsTaskInstanceCreateManyInput], {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateManyInput)
    data!: Array<HomeOpsTaskInstanceCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
