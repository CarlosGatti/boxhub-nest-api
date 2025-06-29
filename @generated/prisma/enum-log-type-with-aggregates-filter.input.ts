import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogType } from './log-type.enum';
import { NestedEnumLogTypeWithAggregatesFilter } from './nested-enum-log-type-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumLogTypeFilter } from './nested-enum-log-type-filter.input';

@InputType()
export class EnumLogTypeWithAggregatesFilter {

    @Field(() => LogType, {nullable:true})
    equals?: keyof typeof LogType;

    @Field(() => [LogType], {nullable:true})
    in?: Array<keyof typeof LogType>;

    @Field(() => [LogType], {nullable:true})
    notIn?: Array<keyof typeof LogType>;

    @Field(() => NestedEnumLogTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumLogTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumLogTypeFilter, {nullable:true})
    _min?: NestedEnumLogTypeFilter;

    @Field(() => NestedEnumLogTypeFilter, {nullable:true})
    _max?: NestedEnumLogTypeFilter;
}
