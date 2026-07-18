import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyReferralWhereInput } from './defined-academy-referral-where.input';

@InputType()
export class DefinedAcademyReferralListRelationFilter {

    @Field(() => DefinedAcademyReferralWhereInput, {nullable:true})
    every?: DefinedAcademyReferralWhereInput;

    @Field(() => DefinedAcademyReferralWhereInput, {nullable:true})
    some?: DefinedAcademyReferralWhereInput;

    @Field(() => DefinedAcademyReferralWhereInput, {nullable:true})
    none?: DefinedAcademyReferralWhereInput;
}
