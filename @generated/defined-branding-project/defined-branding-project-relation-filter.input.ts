import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectWhereInput } from './defined-branding-project-where.input';

@InputType()
export class DefinedBrandingProjectRelationFilter {

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    is?: DefinedBrandingProjectWhereInput;

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    isNot?: DefinedBrandingProjectWhereInput;
}
