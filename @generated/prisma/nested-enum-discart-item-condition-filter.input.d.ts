import { DiscartItemCondition } from './discart-item-condition.enum';
export declare class NestedEnumDiscartItemConditionFilter {
    equals?: keyof typeof DiscartItemCondition;
    in?: Array<keyof typeof DiscartItemCondition>;
    notIn?: Array<keyof typeof DiscartItemCondition>;
    not?: NestedEnumDiscartItemConditionFilter;
}
