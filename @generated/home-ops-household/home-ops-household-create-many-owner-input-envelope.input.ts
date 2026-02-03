import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateManyOwnerInput } from './home-ops-household-create-many-owner.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsHouseholdCreateManyOwnerInputEnvelope {

    @Field(() => [HomeOpsHouseholdCreateManyOwnerInput], {nullable:false})
    @Type(() => HomeOpsHouseholdCreateManyOwnerInput)
    data!: Array<HomeOpsHouseholdCreateManyOwnerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
