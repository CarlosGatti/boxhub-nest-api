import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyModuleWhereInput } from './defined-academy-module-where.input';

@InputType()
export class DefinedAcademyModuleListRelationFilter {

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    every?: DefinedAcademyModuleWhereInput;

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    some?: DefinedAcademyModuleWhereInput;

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    none?: DefinedAcademyModuleWhereInput;
}
