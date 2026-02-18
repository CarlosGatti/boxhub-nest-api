import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketMediaType } from './bucket-media-type.enum';

@InputType()
export class NestedEnumBucketMediaTypeFilter {

    @Field(() => BucketMediaType, {nullable:true})
    equals?: keyof typeof BucketMediaType;

    @Field(() => [BucketMediaType], {nullable:true})
    in?: Array<keyof typeof BucketMediaType>;

    @Field(() => [BucketMediaType], {nullable:true})
    notIn?: Array<keyof typeof BucketMediaType>;

    @Field(() => NestedEnumBucketMediaTypeFilter, {nullable:true})
    not?: NestedEnumBucketMediaTypeFilter;
}
