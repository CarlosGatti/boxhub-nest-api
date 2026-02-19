import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionSectionType } from './bucket-vision-section-type.enum';

@InputType()
export class NestedEnumBucketVisionSectionTypeFilter {

    @Field(() => BucketVisionSectionType, {nullable:true})
    equals?: keyof typeof BucketVisionSectionType;

    @Field(() => [BucketVisionSectionType], {nullable:true})
    in?: Array<keyof typeof BucketVisionSectionType>;

    @Field(() => [BucketVisionSectionType], {nullable:true})
    notIn?: Array<keyof typeof BucketVisionSectionType>;

    @Field(() => NestedEnumBucketVisionSectionTypeFilter, {nullable:true})
    not?: NestedEnumBucketVisionSectionTypeFilter;
}
