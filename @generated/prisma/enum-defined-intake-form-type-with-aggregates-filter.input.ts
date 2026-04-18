import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormType } from './defined-intake-form-type.enum';
import { NestedEnumDefinedIntakeFormTypeWithAggregatesFilter } from './nested-enum-defined-intake-form-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedIntakeFormTypeFilter } from './nested-enum-defined-intake-form-type-filter.input';

@InputType()
export class EnumDefinedIntakeFormTypeWithAggregatesFilter {

    @Field(() => DefinedIntakeFormType, {nullable:true})
    equals?: keyof typeof DefinedIntakeFormType;

    @Field(() => [DefinedIntakeFormType], {nullable:true})
    in?: Array<keyof typeof DefinedIntakeFormType>;

    @Field(() => [DefinedIntakeFormType], {nullable:true})
    notIn?: Array<keyof typeof DefinedIntakeFormType>;

    @Field(() => NestedEnumDefinedIntakeFormTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedIntakeFormTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedIntakeFormTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedIntakeFormTypeFilter;

    @Field(() => NestedEnumDefinedIntakeFormTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedIntakeFormTypeFilter;
}
