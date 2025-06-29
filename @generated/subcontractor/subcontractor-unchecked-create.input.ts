import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { InsuranceUncheckedCreateNestedManyWithoutSubcontractorInput } from '../insurance/insurance-unchecked-create-nested-many-without-subcontractor.input';

@InputType()
export class SubcontractorUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    companyName!: string;

    @Field(() => String, {nullable:false})
    contactName!: string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    phone!: string;

    @Field(() => String, {nullable:false})
    trade!: string;

    @Field(() => String, {nullable:false})
    bankAccount!: string;

    @Field(() => String, {nullable:false})
    paymentPreference!: string;

    @Field(() => String, {nullable:true})
    notes?: string;

    @Field(() => Boolean, {nullable:true})
    priority?: boolean;

    @Field(() => Boolean, {nullable:true})
    createdViaPublicForm?: boolean;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => InsuranceUncheckedCreateNestedManyWithoutSubcontractorInput, {nullable:true})
    insurances?: InsuranceUncheckedCreateNestedManyWithoutSubcontractorInput;
}
