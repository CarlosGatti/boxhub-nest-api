import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@InputType()
export class DefinedAcademyListRelationFilter {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    every?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    some?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    none?: DefinedAcademyWhereInput;
}
