import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdUpdateWithoutTaskInstancesInput } from './home-ops-household-update-without-task-instances.input';

@InputType()
export class HomeOpsHouseholdUpdateToOneWithWhereWithoutTaskInstancesInput {

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;

    @Field(() => HomeOpsHouseholdUpdateWithoutTaskInstancesInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutTaskInstancesInput)
    data!: HomeOpsHouseholdUpdateWithoutTaskInstancesInput;
}
