import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionItemType } from './bucket-vision-item-type.enum';
import { NestedEnumBucketVisionItemTypeFilter } from './nested-enum-bucket-vision-item-type-filter.input';

@InputType()
export class EnumBucketVisionItemTypeFilter {

    @Field(() => BucketVisionItemType, {nullable:true})
    equals?: keyof typeof BucketVisionItemType;

    @Field(() => [BucketVisionItemType], {nullable:true})
    in?: Array<keyof typeof BucketVisionItemType>;

    @Field(() => [BucketVisionItemType], {nullable:true})
    notIn?: Array<keyof typeof BucketVisionItemType>;

    @Field(() => NestedEnumBucketVisionItemTypeFilter, {nullable:true})
    not?: NestedEnumBucketVisionItemTypeFilter;
}
