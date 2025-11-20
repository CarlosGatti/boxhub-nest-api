import { LogType } from './log-type.enum';
export declare class NestedEnumLogTypeFilter {
    equals?: keyof typeof LogType;
    in?: Array<keyof typeof LogType>;
    notIn?: Array<keyof typeof LogType>;
    not?: NestedEnumLogTypeFilter;
}
