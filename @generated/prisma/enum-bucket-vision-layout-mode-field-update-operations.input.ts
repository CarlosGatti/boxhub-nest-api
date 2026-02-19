import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionLayoutMode } from './bucket-vision-layout-mode.enum';

@InputType()
export class EnumBucketVisionLayoutModeFieldUpdateOperationsInput {

    @Field(() => BucketVisionLayoutMode, {nullable:true})
    set?: keyof typeof BucketVisionLayoutMode;
}
