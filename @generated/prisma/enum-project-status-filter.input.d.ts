import { ProjectStatus } from './project-status.enum';
import { NestedEnumProjectStatusFilter } from './nested-enum-project-status-filter.input';
export declare class EnumProjectStatusFilter {
    equals?: keyof typeof ProjectStatus;
    in?: Array<keyof typeof ProjectStatus>;
    notIn?: Array<keyof typeof ProjectStatus>;
    not?: NestedEnumProjectStatusFilter;
}
