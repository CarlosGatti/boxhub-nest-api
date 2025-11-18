import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemStatus } from './discart-item-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDiscartItemStatusFilter } from './nested-enum-discart-item-status-filter.input';

@InputType()
export class NestedEnumDiscartItemStatusWithAggregatesFilter {

    @Field(() => DiscartItemStatus, {nullable:true})
    equals?: keyof typeof DiscartItemStatus;

    @Field(() => [DiscartItemStatus], {nullable:true})
    in?: Array<keyof typeof DiscartItemStatus>;

    @Field(() => [DiscartItemStatus], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemStatus>;

    @Field(() => NestedEnumDiscartItemStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDiscartItemStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDiscartItemStatusFilter, {nullable:true})
    _min?: NestedEnumDiscartItemStatusFilter;

    @Field(() => NestedEnumDiscartItemStatusFilter, {nullable:true})
    _max?: NestedEnumDiscartItemStatusFilter;
}
