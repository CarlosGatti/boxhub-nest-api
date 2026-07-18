import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';

@InputType()
export class DefinedAcademyPartnerListRelationFilter {

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    every?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    some?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    none?: DefinedAcademyPartnerWhereInput;
}
