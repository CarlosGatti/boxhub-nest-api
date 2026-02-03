import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdCreateManyAppInput } from './home-ops-household-create-many-app.input';
import { Type } from 'class-transformer';

@InputType()
export class HomeOpsHouseholdCreateManyAppInputEnvelope {

    @Field(() => [HomeOpsHouseholdCreateManyAppInput], {nullable:false})
    @Type(() => HomeOpsHouseholdCreateManyAppInput)
    data!: Array<HomeOpsHouseholdCreateManyAppInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
