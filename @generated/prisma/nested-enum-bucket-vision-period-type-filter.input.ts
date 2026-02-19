import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionPeriodType } from './bucket-vision-period-type.enum';

@InputType()
export class NestedEnumBucketVisionPeriodTypeFilter {

    @Field(() => BucketVisionPeriodType, {nullable:true})
    equals?: keyof typeof BucketVisionPeriodType;

    @Field(() => [BucketVisionPeriodType], {nullable:true})
    in?: Array<keyof typeof BucketVisionPeriodType>;

    @Field(() => [BucketVisionPeriodType], {nullable:true})
    notIn?: Array<keyof typeof BucketVisionPeriodType>;

    @Field(() => NestedEnumBucketVisionPeriodTypeFilter, {nullable:true})
    not?: NestedEnumBucketVisionPeriodTypeFilter;
}
