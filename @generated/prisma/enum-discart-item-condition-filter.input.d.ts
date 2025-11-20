import { DiscartItemCondition } from './discart-item-condition.enum';
import { NestedEnumDiscartItemConditionFilter } from './nested-enum-discart-item-condition-filter.input';
export declare class EnumDiscartItemConditionFilter {
    equals?: keyof typeof DiscartItemCondition;
    in?: Array<keyof typeof DiscartItemCondition>;
    notIn?: Array<keyof typeof DiscartItemCondition>;
    not?: NestedEnumDiscartItemConditionFilter;
}
