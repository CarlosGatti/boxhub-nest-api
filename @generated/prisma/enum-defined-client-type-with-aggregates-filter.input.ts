import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientType } from './defined-client-type.enum';
import { NestedEnumDefinedClientTypeWithAggregatesFilter } from './nested-enum-defined-client-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedClientTypeFilter } from './nested-enum-defined-client-type-filter.input';

@InputType()
export class EnumDefinedClientTypeWithAggregatesFilter {

    @Field(() => DefinedClientType, {nullable:true})
    equals?: keyof typeof DefinedClientType;

    @Field(() => [DefinedClientType], {nullable:true})
    in?: Array<keyof typeof DefinedClientType>;

    @Field(() => [DefinedClientType], {nullable:true})
    notIn?: Array<keyof typeof DefinedClientType>;

    @Field(() => NestedEnumDefinedClientTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedClientTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedClientTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedClientTypeFilter;

    @Field(() => NestedEnumDefinedClientTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedClientTypeFilter;
}
