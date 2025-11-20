import { DiscartItemStatus } from './discart-item-status.enum';
export declare class NestedEnumDiscartItemStatusFilter {
    equals?: keyof typeof DiscartItemStatus;
    in?: Array<keyof typeof DiscartItemStatus>;
    notIn?: Array<keyof typeof DiscartItemStatus>;
    not?: NestedEnumDiscartItemStatusFilter;
}
