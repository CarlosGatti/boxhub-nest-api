import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkEventWhereInput } from './defined-academy-short-link-event-where.input';

@InputType()
export class DefinedAcademyShortLinkEventListRelationFilter {

    @Field(() => DefinedAcademyShortLinkEventWhereInput, {nullable:true})
    every?: DefinedAcademyShortLinkEventWhereInput;

    @Field(() => DefinedAcademyShortLinkEventWhereInput, {nullable:true})
    some?: DefinedAcademyShortLinkEventWhereInput;

    @Field(() => DefinedAcademyShortLinkEventWhereInput, {nullable:true})
    none?: DefinedAcademyShortLinkEventWhereInput;
}
