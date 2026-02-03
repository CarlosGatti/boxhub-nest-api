import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateManyInput } from './home-ops-household-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHomeOpsHouseholdArgs {

    @Field(() => [HomeOpsHouseholdCreateManyInput], {nullable:false})
    @Type(() => HomeOpsHouseholdCreateManyInput)
    data!: Array<HomeOpsHouseholdCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
