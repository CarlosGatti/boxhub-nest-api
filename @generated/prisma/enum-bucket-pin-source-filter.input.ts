import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketPinSource } from './bucket-pin-source.enum';
import { NestedEnumBucketPinSourceFilter } from './nested-enum-bucket-pin-source-filter.input';

@InputType()
export class EnumBucketPinSourceFilter {

    @Field(() => BucketPinSource, {nullable:true})
    equals?: keyof typeof BucketPinSource;

    @Field(() => [BucketPinSource], {nullable:true})
    in?: Array<keyof typeof BucketPinSource>;

    @Field(() => [BucketPinSource], {nullable:true})
    notIn?: Array<keyof typeof BucketPinSource>;

    @Field(() => NestedEnumBucketPinSourceFilter, {nullable:true})
    not?: NestedEnumBucketPinSourceFilter;
}
