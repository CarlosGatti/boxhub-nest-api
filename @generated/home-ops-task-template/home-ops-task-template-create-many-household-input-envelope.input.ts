import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsTaskTemplateCreateManyHouseholdInput } from './home-ops-task-template-create-many-household.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsTaskTemplateCreateManyHouseholdInputEnvelope {

    @Field(() => [HomeOpsTaskTemplateCreateManyHouseholdInput], {nullable:false})
    @Type(() => HomeOpsTaskTemplateCreateManyHouseholdInput)
    data!: Array<HomeOpsTaskTemplateCreateManyHouseholdInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
