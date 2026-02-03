import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsHouseholdUpdateManyMutationInput } from './home-ops-household-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HomeOpsHouseholdWhereInput } from './home-ops-household-where.input';

@ArgsType()
export class UpdateManyHomeOpsHouseholdArgs {

    @Field(() => HomeOpsHouseholdUpdateManyMutationInput, {nullable:false})
    @Type(() => HomeOpsHouseholdUpdateManyMutationInput)
    data!: HomeOpsHouseholdUpdateManyMutationInput;

    @Field(() => HomeOpsHouseholdWhereInput, {nullable:true})
    @Type(() => HomeOpsHouseholdWhereInput)
    where?: HomeOpsHouseholdWhereInput;
}
