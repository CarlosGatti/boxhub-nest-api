import { DiscartItemStatus } from './discart-item-status.enum';
import { NestedEnumDiscartItemStatusFilter } from './nested-enum-discart-item-status-filter.input';
export declare class EnumDiscartItemStatusFilter {
    equals?: keyof typeof DiscartItemStatus;
    in?: Array<keyof typeof DiscartItemStatus>;
    notIn?: Array<keyof typeof DiscartItemStatus>;
    not?: NestedEnumDiscartItemStatusFilter;
}
