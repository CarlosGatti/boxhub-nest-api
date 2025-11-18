import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DiscartItemType } from './discart-item-type.enum';
import { NestedEnumDiscartItemTypeFilter } from './nested-enum-discart-item-type-filter.input';

@InputType()
export class EnumDiscartItemTypeFilter {

    @Field(() => DiscartItemType, {nullable:true})
    equals?: keyof typeof DiscartItemType;

    @Field(() => [DiscartItemType], {nullable:true})
    in?: Array<keyof typeof DiscartItemType>;

    @Field(() => [DiscartItemType], {nullable:true})
    notIn?: Array<keyof typeof DiscartItemType>;

    @Field(() => NestedEnumDiscartItemTypeFilter, {nullable:true})
    not?: NestedEnumDiscartItemTypeFilter;
}
