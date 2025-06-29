import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class InsuranceCreateWithoutSubcontractorInput {

    @Field(() => String, {nullable:false})
    company!: string;

    @Field(() => Date, {nullable:false})
    expiration!: Date | string;

    @Field(() => String, {nullable:false})
    documentUrl!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
