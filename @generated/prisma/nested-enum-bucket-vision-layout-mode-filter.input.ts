import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionLayoutMode } from './bucket-vision-layout-mode.enum';

@InputType()
export class NestedEnumBucketVisionLayoutModeFilter {

    @Field(() => BucketVisionLayoutMode, {nullable:true})
    equals?: keyof typeof BucketVisionLayoutMode;

    @Field(() => [BucketVisionLayoutMode], {nullable:true})
    in?: Array<keyof typeof BucketVisionLayoutMode>;

    @Field(() => [BucketVisionLayoutMode], {nullable:true})
    notIn?: Array<keyof typeof BucketVisionLayoutMode>;

    @Field(() => NestedEnumBucketVisionLayoutModeFilter, {nullable:true})
    not?: NestedEnumBucketVisionLayoutModeFilter;
}
