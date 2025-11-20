import { DiscartItemType } from './discart-item-type.enum';
export declare class NestedEnumDiscartItemTypeFilter {
    equals?: keyof typeof DiscartItemType;
    in?: Array<keyof typeof DiscartItemType>;
    notIn?: Array<keyof typeof DiscartItemType>;
    not?: NestedEnumDiscartItemTypeFilter;
}
