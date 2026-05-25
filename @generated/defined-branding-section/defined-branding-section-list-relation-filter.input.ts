import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingSectionWhereInput } from './defined-branding-section-where.input';

@InputType()
export class DefinedBrandingSectionListRelationFilter {

    @Field(() => DefinedBrandingSectionWhereInput, {nullable:true})
    every?: DefinedBrandingSectionWhereInput;

    @Field(() => DefinedBrandingSectionWhereInput, {nullable:true})
    some?: DefinedBrandingSectionWhereInput;

    @Field(() => DefinedBrandingSectionWhereInput, {nullable:true})
    none?: DefinedBrandingSectionWhereInput;
}
