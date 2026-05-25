import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingSectionType } from './defined-branding-section-type.enum';
import { NestedEnumDefinedBrandingSectionTypeWithAggregatesFilter } from './nested-enum-defined-branding-section-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedBrandingSectionTypeFilter } from './nested-enum-defined-branding-section-type-filter.input';

@InputType()
export class EnumDefinedBrandingSectionTypeWithAggregatesFilter {

    @Field(() => DefinedBrandingSectionType, {nullable:true})
    equals?: keyof typeof DefinedBrandingSectionType;

    @Field(() => [DefinedBrandingSectionType], {nullable:true})
    in?: Array<keyof typeof DefinedBrandingSectionType>;

    @Field(() => [DefinedBrandingSectionType], {nullable:true})
    notIn?: Array<keyof typeof DefinedBrandingSectionType>;

    @Field(() => NestedEnumDefinedBrandingSectionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedBrandingSectionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedBrandingSectionTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedBrandingSectionTypeFilter;

    @Field(() => NestedEnumDefinedBrandingSectionTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedBrandingSectionTypeFilter;
}
