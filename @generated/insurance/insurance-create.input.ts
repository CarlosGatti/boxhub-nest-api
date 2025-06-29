import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubcontractorCreateNestedOneWithoutInsurancesInput } from '../subcontractor/subcontractor-create-nested-one-without-insurances.input';

@InputType()
export class InsuranceCreateInput {

    @Field(() => String, {nullable:false})
    company!: string;

    @Field(() => Date, {nullable:false})
    expiration!: Date | string;

    @Field(() => String, {nullable:false})
    documentUrl!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => SubcontractorCreateNestedOneWithoutInsurancesInput, {nullable:false})
    subcontractor!: SubcontractorCreateNestedOneWithoutInsurancesInput;
}
