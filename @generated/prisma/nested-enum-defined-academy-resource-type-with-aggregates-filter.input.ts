import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceType } from './defined-academy-resource-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyResourceTypeFilter } from './nested-enum-defined-academy-resource-type-filter.input';

@InputType()
export class NestedEnumDefinedAcademyResourceTypeWithAggregatesFilter {

    @Field(() => DefinedAcademyResourceType, {nullable:true})
    equals?: keyof typeof DefinedAcademyResourceType;

    @Field(() => [DefinedAcademyResourceType], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyResourceType>;

    @Field(() => [DefinedAcademyResourceType], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyResourceType>;

    @Field(() => NestedEnumDefinedAcademyResourceTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyResourceTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyResourceTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyResourceTypeFilter;

    @Field(() => NestedEnumDefinedAcademyResourceTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyResourceTypeFilter;
}
