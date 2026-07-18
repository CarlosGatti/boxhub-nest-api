import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkWhereInput } from './defined-academy-short-link-where.input';

@InputType()
export class DefinedAcademyShortLinkRelationFilter {

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    is?: DefinedAcademyShortLinkWhereInput;

    @Field(() => DefinedAcademyShortLinkWhereInput, {nullable:true})
    isNot?: DefinedAcademyShortLinkWhereInput;
}
