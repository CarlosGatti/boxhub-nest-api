import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionPeriodType } from './bucket-vision-period-type.enum';
import { NestedEnumBucketVisionPeriodTypeFilter } from './nested-enum-bucket-vision-period-type-filter.input';

@InputType()
export class EnumBucketVisionPeriodTypeFilter {

    @Field(() => BucketVisionPeriodType, {nullable:true})
    equals?: keyof typeof BucketVisionPeriodType;

    @Field(() => [BucketVisionPeriodType], {nullable:true})
    in?: Array<keyof typeof BucketVisionPeriodType>;

    @Field(() => [BucketVisionPeriodType], {nullable:true})
    notIn?: Array<keyof typeof BucketVisionPeriodType>;

    @Field(() => NestedEnumBucketVisionPeriodTypeFilter, {nullable:true})
    not?: NestedEnumBucketVisionPeriodTypeFilter;
}
