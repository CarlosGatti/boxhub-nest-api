import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionLayoutMode } from './bucket-vision-layout-mode.enum';
import { NestedEnumBucketVisionLayoutModeFilter } from './nested-enum-bucket-vision-layout-mode-filter.input';

@InputType()
export class EnumBucketVisionLayoutModeFilter {

    @Field(() => BucketVisionLayoutMode, {nullable:true})
    equals?: keyof typeof BucketVisionLayoutMode;

    @Field(() => [BucketVisionLayoutMode], {nullable:true})
    in?: Array<keyof typeof BucketVisionLayoutMode>;

    @Field(() => [BucketVisionLayoutMode], {nullable:true})
    notIn?: Array<keyof typeof BucketVisionLayoutMode>;

    @Field(() => NestedEnumBucketVisionLayoutModeFilter, {nullable:true})
    not?: NestedEnumBucketVisionLayoutModeFilter;
}
