import { PhotoCategory } from './photo-category.enum';
export declare class NestedEnumPhotoCategoryFilter {
    equals?: keyof typeof PhotoCategory;
    in?: Array<keyof typeof PhotoCategory>;
    notIn?: Array<keyof typeof PhotoCategory>;
    not?: NestedEnumPhotoCategoryFilter;
}
