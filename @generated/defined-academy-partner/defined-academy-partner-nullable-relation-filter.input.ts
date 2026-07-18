import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerWhereInput } from './defined-academy-partner-where.input';

@InputType()
export class DefinedAcademyPartnerNullableRelationFilter {

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    is?: DefinedAcademyPartnerWhereInput;

    @Field(() => DefinedAcademyPartnerWhereInput, {nullable:true})
    isNot?: DefinedAcademyPartnerWhereInput;
}
