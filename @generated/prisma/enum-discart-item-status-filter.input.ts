import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemStatus } from './discart-item-status.enum';
import { NestedEnumDiscartItemStatusFilter } from './nested-enum-discart-item-status-filter.input';

@InputType()
export class EnumDiscartItemStatusFilter {

    @Field(() => DiscartItemStatus, {nullable:true})
    equals?: keyof typeof DiscartItemStatus;

    @Field(() => [DiscartItemStatus], {nullable:true})
    in?: Array<keyof typeof DiscartItemStatus>;

    @Field(() => [DiscartItemStatus], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemStatus>;

    @Field(() => NestedEnumDiscartItemStatusFilter, {nullable:true})
    not?: NestedEnumDiscartItemStatusFilter;
}
