import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionItemType } from './bucket-vision-item-type.enum';

@InputType()
export class EnumBucketVisionItemTypeFieldUpdateOperationsInput {

    @Field(() => BucketVisionItemType, {nullable:true})
    set?: keyof typeof BucketVisionItemType;
}
