import { PermitKind } from './permit-kind.enum';
export declare class NestedEnumPermitKindFilter {
    equals?: keyof typeof PermitKind;
    in?: Array<keyof typeof PermitKind>;
    notIn?: Array<keyof typeof PermitKind>;
    not?: NestedEnumPermitKindFilter;
}
