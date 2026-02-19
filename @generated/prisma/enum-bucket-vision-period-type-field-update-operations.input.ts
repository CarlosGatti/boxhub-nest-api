import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionPeriodType } from './bucket-vision-period-type.enum';

@InputType()
export class EnumBucketVisionPeriodTypeFieldUpdateOperationsInput {

    @Field(() => BucketVisionPeriodType, {nullable:true})
    set?: keyof typeof BucketVisionPeriodType;
}
