import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectWhereInput } from './defined-branding-project-where.input';

@InputType()
export class DefinedBrandingProjectListRelationFilter {

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    every?: DefinedBrandingProjectWhereInput;

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    some?: DefinedBrandingProjectWhereInput;

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    none?: DefinedBrandingProjectWhereInput;
}
