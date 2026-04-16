import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';

@InputType()
export class DefinedProjectListRelationFilter {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    every?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    some?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    none?: DefinedProjectWhereInput;
}
