import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionLayoutMode } from './bucket-vision-layout-mode.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBucketVisionLayoutModeFilter } from './nested-enum-bucket-vision-layout-mode-filter.input';

@InputType()
export class NestedEnumBucketVisionLayoutModeWithAggregatesFilter {

    @Field(() => BucketVisionLayoutMode, {nullable:true})
    equals?: keyof typeof BucketVisionLayoutMode;

    @Field(() => [BucketVisionLayoutMode], {nullable:true})
    in?: Array<keyof typeof BucketVisionLayoutMode>;

    @Field(() => [BucketVisionLayoutMode], {nullable:true})
    notIn?: Array<keyof typeof BucketVisionLayoutMode>;

    @Field(() => NestedEnumBucketVisionLayoutModeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBucketVisionLayoutModeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBucketVisionLayoutModeFilter, {nullable:true})
    _min?: NestedEnumBucketVisionLayoutModeFilter;

    @Field(() => NestedEnumBucketVisionLayoutModeFilter, {nullable:true})
    _max?: NestedEnumBucketVisionLayoutModeFilter;
}
