import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingSectionType } from './defined-branding-section-type.enum';

@InputType()
export class NestedEnumDefinedBrandingSectionTypeFilter {

    @Field(() => DefinedBrandingSectionType, {nullable:true})
    equals?: keyof typeof DefinedBrandingSectionType;

    @Field(() => [DefinedBrandingSectionType], {nullable:true})
    in?: Array<keyof typeof DefinedBrandingSectionType>;

    @Field(() => [DefinedBrandingSectionType], {nullable:true})
    notIn?: Array<keyof typeof DefinedBrandingSectionType>;

    @Field(() => NestedEnumDefinedBrandingSectionTypeFilter, {nullable:true})
    not?: NestedEnumDefinedBrandingSectionTypeFilter;
}
