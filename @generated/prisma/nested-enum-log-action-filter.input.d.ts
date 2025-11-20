import { LogAction } from './log-action.enum';
export declare class NestedEnumLogActionFilter {
    equals?: keyof typeof LogAction;
    in?: Array<keyof typeof LogAction>;
    notIn?: Array<keyof typeof LogAction>;
    not?: NestedEnumLogActionFilter;
}
