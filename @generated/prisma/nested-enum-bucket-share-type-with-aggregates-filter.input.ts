import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketShareType } from './bucket-share-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBucketShareTypeFilter } from './nested-enum-bucket-share-type-filter.input';

@InputType()
export class NestedEnumBucketShareTypeWithAggregatesFilter {

    @Field(() => BucketShareType, {nullable:true})
    equals?: keyof typeof BucketShareType;

    @Field(() => [BucketShareType], {nullable:true})
    in?: Array<keyof typeof BucketShareType>;

    @Field(() => [BucketShareType], {nullable:true})
    notIn?: Array<keyof typeof BucketShareType>;

    @Field(() => NestedEnumBucketShareTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBucketShareTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBucketShareTypeFilter, {nullable:true})
    _min?: NestedEnumBucketShareTypeFilter;

    @Field(() => NestedEnumBucketShareTypeFilter, {nullable:true})
    _max?: NestedEnumBucketShareTypeFilter;
}
