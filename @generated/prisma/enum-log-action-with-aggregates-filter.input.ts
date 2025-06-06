import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogAction } from './log-action.enum';
import { NestedEnumLogActionWithAggregatesFilter } from './nested-enum-log-action-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumLogActionFilter } from './nested-enum-log-action-filter.input';

@InputType()
export class EnumLogActionWithAggregatesFilter {

    @Field(() => LogAction, {nullable:true})
    equals?: keyof typeof LogAction;

    @Field(() => [LogAction], {nullable:true})
    in?: Array<keyof typeof LogAction>;

    @Field(() => [LogAction], {nullable:true})
    notIn?: Array<keyof typeof LogAction>;

    @Field(() => NestedEnumLogActionWithAggregatesFilter, {nullable:true})
    not?: NestedEnumLogActionWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumLogActionFilter, {nullable:true})
    _min?: NestedEnumLogActionFilter;

    @Field(() => NestedEnumLogActionFilter, {nullable:true})
    _max?: NestedEnumLogActionFilter;
}
