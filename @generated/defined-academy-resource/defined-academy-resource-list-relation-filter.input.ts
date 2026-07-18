import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';

@InputType()
export class DefinedAcademyResourceListRelationFilter {

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    every?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    some?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    none?: DefinedAcademyResourceWhereInput;
}
