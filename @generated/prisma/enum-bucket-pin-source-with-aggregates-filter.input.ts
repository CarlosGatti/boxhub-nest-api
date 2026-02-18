import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketPinSource } from './bucket-pin-source.enum';
import { NestedEnumBucketPinSourceWithAggregatesFilter } from './nested-enum-bucket-pin-source-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumBucketPinSourceFilter } from './nested-enum-bucket-pin-source-filter.input';

@InputType()
export class EnumBucketPinSourceWithAggregatesFilter {

    @Field(() => BucketPinSource, {nullable:true})
    equals?: keyof typeof BucketPinSource;

    @Field(() => [BucketPinSource], {nullable:true})
    in?: Array<keyof typeof BucketPinSource>;

    @Field(() => [BucketPinSource], {nullable:true})
    notIn?: Array<keyof typeof BucketPinSource>;

    @Field(() => NestedEnumBucketPinSourceWithAggregatesFilter, {nullable:true})
    not?: NestedEnumBucketPinSourceWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumBucketPinSourceFilter, {nullable:true})
    _min?: NestedEnumBucketPinSourceFilter;

    @Field(() => NestedEnumBucketPinSourceFilter, {nullable:true})
    _max?: NestedEnumBucketPinSourceFilter;
}
