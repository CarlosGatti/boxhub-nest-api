import { LogAction } from './log-action.enum';
import { NestedEnumLogActionFilter } from './nested-enum-log-action-filter.input';
export declare class EnumLogActionFilter {
    equals?: keyof typeof LogAction;
    in?: Array<keyof typeof LogAction>;
    notIn?: Array<keyof typeof LogAction>;
    not?: NestedEnumLogActionFilter;
}
