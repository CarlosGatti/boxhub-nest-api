import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';

@InputType()
export class DefinedAcademyResourceNullableRelationFilter {

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    is?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    isNot?: DefinedAcademyResourceWhereInput;
}
