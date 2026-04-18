import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeAnswerType } from './defined-intake-answer-type.enum';
import { NestedEnumDefinedIntakeAnswerTypeWithAggregatesFilter } from './nested-enum-defined-intake-answer-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedIntakeAnswerTypeFilter } from './nested-enum-defined-intake-answer-type-filter.input';

@InputType()
export class EnumDefinedIntakeAnswerTypeWithAggregatesFilter {

    @Field(() => DefinedIntakeAnswerType, {nullable:true})
    equals?: keyof typeof DefinedIntakeAnswerType;

    @Field(() => [DefinedIntakeAnswerType], {nullable:true})
    in?: Array<keyof typeof DefinedIntakeAnswerType>;

    @Field(() => [DefinedIntakeAnswerType], {nullable:true})
    notIn?: Array<keyof typeof DefinedIntakeAnswerType>;

    @Field(() => NestedEnumDefinedIntakeAnswerTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedIntakeAnswerTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedIntakeAnswerTypeFilter, {nullable:true})
    _min?: NestedEnumDefinedIntakeAnswerTypeFilter;

    @Field(() => NestedEnumDefinedIntakeAnswerTypeFilter, {nullable:true})
    _max?: NestedEnumDefinedIntakeAnswerTypeFilter;
}
