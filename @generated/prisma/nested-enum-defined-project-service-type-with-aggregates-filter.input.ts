import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectServiceType } from './defined-project-service-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedProjectServiceTypeFilter } from './nested-enum-defined-project-service-type-filter.input';

@InputType()
export class NestedEnumDefinedProjectServiceTypeWithAggregatesFilter {

    @Field(() => DefinedProjectServiceType, {nullable:true})
    equals?: keyof typeof DefinedProjectServiceType;

    @Field(() => [DefinedProjectServiceType], {nullable:true})
    in?: Array<keyof typeof DefinedProjectServiceType>;

    @Field(() => [DefinedProjectServiceType], {nullable:true})
    notIn?: Array<keyof typeof DefinedProjectServiceType>;

    @Field(() => NestedEnumDefinedProjectServiceTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedProjectServiceTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedProjectServiceTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedProjectServiceTypeFilter;

    @Field(() => NestedEnumDefinedProjectServiceTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedProjectServiceTypeFilter;
}
