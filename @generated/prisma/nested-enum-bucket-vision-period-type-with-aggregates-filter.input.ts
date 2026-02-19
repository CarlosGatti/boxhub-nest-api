import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionPeriodType } from './bucket-vision-period-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBucketVisionPeriodTypeFilter } from './nested-enum-bucket-vision-period-type-filter.input';

@InputType()
export class NestedEnumBucketVisionPeriodTypeWithAggregatesFilter {

    @Field(() => BucketVisionPeriodType, {nullable:true})
    equals?: keyof typeof BucketVisionPeriodType;

    @Field(() => [BucketVisionPeriodType], {nullable:true})
    in?: Array<keyof typeof BucketVisionPeriodType>;

    @Field(() => [BucketVisionPeriodType], {nullable:true})
    notIn?: Array<keyof typeof BucketVisionPeriodType>;

    @Field(() => NestedEnumBucketVisionPeriodTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBucketVisionPeriodTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBucketVisionPeriodTypeFilter, {nullable:true})
    _min?: NestedEnumBucketVisionPeriodTypeFilter;

    @Field(() => NestedEnumBucketVisionPeriodTypeFilter, {nullable:true})
    _max?: NestedEnumBucketVisionPeriodTypeFilter;
}
