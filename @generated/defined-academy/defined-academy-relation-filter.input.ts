import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@InputType()
export class DefinedAcademyRelationFilter {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    is?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    isNot?: DefinedAcademyWhereInput;
}
