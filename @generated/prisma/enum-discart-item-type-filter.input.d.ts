import { DiscartItemType } from './discart-item-type.enum';
import { NestedEnumDiscartItemTypeFilter } from './nested-enum-discart-item-type-filter.input';
export declare class EnumDiscartItemTypeFilter {
    equals?: keyof typeof DiscartItemType;
    in?: Array<keyof typeof DiscartItemType>;
    notIn?: Array<keyof typeof DiscartItemType>;
    not?: NestedEnumDiscartItemTypeFilter;
}
