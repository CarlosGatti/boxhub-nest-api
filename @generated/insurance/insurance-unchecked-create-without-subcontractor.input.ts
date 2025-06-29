import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class InsuranceUncheckedCreateWithoutSubcontractorInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    company!: string;

    @Field(() => Date, {nullable:false})
    expiration!: Date | string;

    @Field(() => String, {nullable:false})
    documentUrl!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
