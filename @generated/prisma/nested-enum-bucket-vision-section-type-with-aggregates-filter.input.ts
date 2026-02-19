import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionSectionType } from './bucket-vision-section-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBucketVisionSectionTypeFilter } from './nested-enum-bucket-vision-section-type-filter.input';

@InputType()
export class NestedEnumBucketVisionSectionTypeWithAggregatesFilter {

    @Field(() => BucketVisionSectionType, {nullable:true})
    equals?: keyof typeof BucketVisionSectionType;

    @Field(() => [BucketVisionSectionType], {nullable:true})
    in?: Array<keyof typeof BucketVisionSectionType>;

    @Field(() => [BucketVisionSectionType], {nullable:true})
    notIn?: Array<keyof typeof BucketVisionSectionType>;

    @Field(() => NestedEnumBucketVisionSectionTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBucketVisionSectionTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBucketVisionSectionTypeFilter, {nullable:true})
    _min?: NestedEnumBucketVisionSectionTypeFilter;

    @Field(() => NestedEnumBucketVisionSectionTypeFilter, {nullable:true})
    _max?: NestedEnumBucketVisionSectionTypeFilter;
}
