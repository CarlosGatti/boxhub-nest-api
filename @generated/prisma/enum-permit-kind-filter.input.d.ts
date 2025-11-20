import { PermitKind } from './permit-kind.enum';
import { NestedEnumPermitKindFilter } from './nested-enum-permit-kind-filter.input';
export declare class EnumPermitKindFilter {
    equals?: keyof typeof PermitKind;
    in?: Array<keyof typeof PermitKind>;
    notIn?: Array<keyof typeof PermitKind>;
    not?: NestedEnumPermitKindFilter;
}
