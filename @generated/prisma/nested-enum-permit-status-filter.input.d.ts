import { PermitStatus } from './permit-status.enum';
export declare class NestedEnumPermitStatusFilter {
    equals?: keyof typeof PermitStatus;
    in?: Array<keyof typeof PermitStatus>;
    notIn?: Array<keyof typeof PermitStatus>;
    not?: NestedEnumPermitStatusFilter;
}
