import { PhotoCategory } from './photo-category.enum';
import { NestedEnumPhotoCategoryFilter } from './nested-enum-photo-category-filter.input';
export declare class EnumPhotoCategoryFilter {
    equals?: keyof typeof PhotoCategory;
    in?: Array<keyof typeof PhotoCategory>;
    notIn?: Array<keyof typeof PhotoCategory>;
    not?: NestedEnumPhotoCategoryFilter;
}
