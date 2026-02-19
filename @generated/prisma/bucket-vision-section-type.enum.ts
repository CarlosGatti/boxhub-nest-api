import { registerEnumType } from '@nestjs/graphql';

export enum BucketVisionSectionType {
    LIFE_WELLBEING = "LIFE_WELLBEING",
    SCHOOL_LEARNING = "SCHOOL_LEARNING",
    DREAM_BIG = "DREAM_BIG",
    CAREER_GROWTH = "CAREER_GROWTH",
    VISUAL_INSPIRATION = "VISUAL_INSPIRATION",
    CUSTOM = "CUSTOM"
}


registerEnumType(BucketVisionSectionType, { name: 'BucketVisionSectionType', description: undefined })
