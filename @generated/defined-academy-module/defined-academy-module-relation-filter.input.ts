import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyModuleWhereInput } from './defined-academy-module-where.input';

@InputType()
export class DefinedAcademyModuleRelationFilter {

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    is?: DefinedAcademyModuleWhereInput;

    @Field(() => DefinedAcademyModuleWhereInput, {nullable:true})
    isNot?: DefinedAcademyModuleWhereInput;
}
