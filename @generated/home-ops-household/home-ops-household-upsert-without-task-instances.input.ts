import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdUpdateWithoutTaskInstancesInput } from './home-ops-household-update-without-task-instances.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdCreateWithoutTaskInstancesInput } from './home-ops-household-create-without-task-instances.input';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';

@InputType()
export class HomeOpsHouseholdUpsertWithoutTaskInstancesInput {

    @Field(() => HomeOpsHouseholdUpdateWithoutTaskInstancesInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateWithoutTaskInstancesInput)
    update!: HomeOpsHouseholdUpdateWithoutTaskInstancesInput;

    @Field(() => HomeOpsHouseholdCreateWithoutTaskInstancesInput, {nullable:false})
    @Type(() => HomeOpsHouseholdCreateWithoutTaskInstancesInput)
    create!: HomeOpsHouseholdCreateWithoutTaskInstancesInput;

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;
}
