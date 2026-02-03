import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HomeOpsHouseholdScalarWhereInput } from './home-ops-household-scalar-where.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdUpdateManyMutationInput } from './home-ops-household-update-many-mutation.input';

@InputType()
export class HomeOpsHouseholdUpdateManyWithWhereWithoutAppInput {

    @Field(() => HomeOpsHouseholdScalarWhereInput, {nullable:false})
    @Type(() => HomeOpsHouseholdScalarWhereInput)
    where!: HomeOpsHouseholdScalarWhereInput;

    @Field(() => HomeOpsHouseholdUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateManyMutationInput)
    data!: HomeOpsHouseholdUpdateManyMutationInput;
}
