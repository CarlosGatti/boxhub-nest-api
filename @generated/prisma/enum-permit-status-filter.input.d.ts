import { PermitStatus } from './permit-status.enum';
import { NestedEnumPermitStatusFilter } from './nested-enum-permit-status-filter.input';
export declare class EnumPermitStatusFilter {
    equals?: keyof typeof PermitStatus;
    in?: Array<keyof typeof PermitStatus>;
    notIn?: Array<keyof typeof PermitStatus>;
    not?: NestedEnumPermitStatusFilter;
}
