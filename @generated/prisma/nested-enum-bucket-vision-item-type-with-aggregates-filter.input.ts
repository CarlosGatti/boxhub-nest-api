import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionItemType } from './bucket-vision-item-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBucketVisionItemTypeFilter } from './nested-enum-bucket-vision-item-type-filter.input';

@InputType()
export class NestedEnumBucketVisionItemTypeWithAggregatesFilter {

    @Field(() => BucketVisionItemType, {nullable:true})
    equals?: keyof typeof BucketVisionItemType;

    @Field(() => [BucketVisionItemType], {nullable:true})
    in?: Array<keyof typeof BucketVisionItemType>;

    @Field(() => [BucketVisionItemType], {nullable:true})
    notIn?: Array<keyof typeof BucketVisionItemType>;

    @Field(() => NestedEnumBucketVisionItemTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBucketVisionItemTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBucketVisionItemTypeFilter, {nullable:true})
    _min?: NestedEnumBucketVisionItemTypeFilter;

    @Field(() => NestedEnumBucketVisionItemTypeFilter, {nullable:true})
    _max?: NestedEnumBucketVisionItemTypeFilter;
}
