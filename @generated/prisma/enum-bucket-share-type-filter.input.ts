import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketShareType } from './bucket-share-type.enum';
import { NestedEnumBucketShareTypeFilter } from './nested-enum-bucket-share-type-filter.input';

@InputType()
export class EnumBucketShareTypeFilter {

    @Field(() => BucketShareType, {nullable:true})
    equals?: keyof typeof BucketShareType;

    @Field(() => [BucketShareType], {nullable:true})
    in?: Array<keyof typeof BucketShareType>;

    @Field(() => [BucketShareType], {nullable:true})
    notIn?: Array<keyof typeof BucketShareType>;

    @Field(() => NestedEnumBucketShareTypeFilter, {nullable:true})
    not?: NestedEnumBucketShareTypeFilter;
}
