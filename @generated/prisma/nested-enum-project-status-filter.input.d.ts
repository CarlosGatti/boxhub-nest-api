import { ProjectStatus } from './project-status.enum';
export declare class NestedEnumProjectStatusFilter {
    equals?: keyof typeof ProjectStatus;
    in?: Array<keyof typeof ProjectStatus>;
    notIn?: Array<keyof typeof ProjectStatus>;
    not?: NestedEnumProjectStatusFilter;
}
