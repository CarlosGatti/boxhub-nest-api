import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormStatus } from './defined-intake-form-status.enum';
import { NestedEnumDefinedIntakeFormStatusWithAggregatesFilter } from './nested-enum-defined-intake-form-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedIntakeFormStatusFilter } from './nested-enum-defined-intake-form-status-filter.input';

@InputType()
export class EnumDefinedIntakeFormStatusWithAggregatesFilter {

    @Field(() => DefinedIntakeFormStatus, {nullable:true})
    equals?: keyof typeof DefinedIntakeFormStatus;

    @Field(() => [DefinedIntakeFormStatus], {nullable:true})
    in?: Array<keyof typeof DefinedIntakeFormStatus>;

    @Field(() => [DefinedIntakeFormStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedIntakeFormStatus>;

    @Field(() => NestedEnumDefinedIntakeFormStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedIntakeFormStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedIntakeFormStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedIntakeFormStatusFilter;

    @Field(() => NestedEnumDefinedIntakeFormStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedIntakeFormStatusFilter;
}
