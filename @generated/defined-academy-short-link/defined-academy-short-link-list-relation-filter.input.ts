import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkWhereInput } from './defined-academy-short-link-where.input';

@InputType()
export class DefinedAcademyShortLinkListRelationFilter {

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    every?: DefinedAcademyShortLinkWhereInput;

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    some?: DefinedAcademyShortLinkWhereInput;

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    none?: DefinedAcademyShortLinkWhereInput;
}
