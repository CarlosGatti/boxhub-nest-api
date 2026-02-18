import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketMediaType } from './bucket-media-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBucketMediaTypeFilter } from './nested-enum-bucket-media-type-filter.input';

@InputType()
export class NestedEnumBucketMediaTypeWithAggregatesFilter {

    @Field(() => BucketMediaType, {nullable:true})
    equals?: keyof typeof BucketMediaType;

    @Field(() => [BucketMediaType], {nullable:true})
    in?: Array<keyof typeof BucketMediaType>;

    @Field(() => [BucketMediaType], {nullable:true})
    notIn?: Array<keyof typeof BucketMediaType>;

    @Field(() => NestedEnumBucketMediaTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBucketMediaTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBucketMediaTypeFilter, {nullable:true})
    _min?: NestedEnumBucketMediaTypeFilter;

    @Field(() => NestedEnumBucketMediaTypeFilter, {nullable:true})
    _max?: NestedEnumBucketMediaTypeFilter;
}
