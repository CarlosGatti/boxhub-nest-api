import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketMediaType } from './bucket-media-type.enum';
import { NestedEnumBucketMediaTypeFilter } from './nested-enum-bucket-media-type-filter.input';

@InputType()
export class EnumBucketMediaTypeFilter {

    @Field(() => BucketMediaType, {nullable:true})
    equals?: keyof typeof BucketMediaType;

    @Field(() => [BucketMediaType], {nullable:true})
    in?: Array<keyof typeof BucketMediaType>;

    @Field(() => [BucketMediaType], {nullable:true})
    notIn?: Array<keyof typeof BucketMediaType>;

    @Field(() => NestedEnumBucketMediaTypeFilter, {nullable:true})
    not?: NestedEnumBucketMediaTypeFilter;
}
