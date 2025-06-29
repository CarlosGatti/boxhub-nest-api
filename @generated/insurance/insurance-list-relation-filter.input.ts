import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { InsuranceWhereInput } from './insurance-where.input';

@InputType()
export class InsuranceListRelationFilter {

    @Field(() => InsuranceWhereInput, {nullable:true})
    every?: InsuranceWhereInput;

    @Field(() => InsuranceWhereInput, {nullable:true})
    some?: InsuranceWhereInput;

    @Field(() => InsuranceWhereInput, {nullable:true})
    none?: InsuranceWhereInput;
}
