import { LogType } from './log-type.enum';
import { NestedEnumLogTypeFilter } from './nested-enum-log-type-filter.input';
export declare class EnumLogTypeFilter {
    equals?: keyof typeof LogType;
    in?: Array<keyof typeof LogType>;
    notIn?: Array<keyof typeof LogType>;
    not?: NestedEnumLogTypeFilter;
}
