import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceCreateManyHouseholdInput } from './home-ops-task-instance-create-many-household.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTaskInstanceCreateManyHouseholdInputEnvelope {

    @Field(() => [HomeOpsTaskInstanceCreateManyHouseholdInput], {nullable:false})
    @Type(() => HomeOpsTaskInstanceCreateManyHouseholdInput)
    data!: Array<HomeOpsTaskInstanceCreateManyHouseholdInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
