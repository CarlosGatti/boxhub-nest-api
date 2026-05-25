import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingSectionType } from './defined-branding-section-type.enum';
import { NestedEnumDefinedBrandingSectionTypeFilter } from './nested-enum-defined-branding-section-type-filter.input';

@InputType()
export class EnumDefinedBrandingSectionTypeFilter {

    @Field(() => DefinedBrandingSectionType, {nullable:true})
    equals?: keyof typeof DefinedBrandingSectionType;

    @Field(() => [DefinedBrandingSectionType], {nullable:true})
    in?: Array<keyof typeof DefinedBrandingSectionType>;

    @Field(() => [DefinedBrandingSectionType], {nullable:true})
    notIn?: Array<keyof typeof DefinedBrandingSectionType>;

    @Field(() => NestedEnumDefinedBrandingSectionTypeFilter, {nullable:true})
    not?: NestedEnumDefinedBrandingSectionTypeFilter;
}
