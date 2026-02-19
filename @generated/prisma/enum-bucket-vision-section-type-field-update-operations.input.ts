import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionSectionType } from './bucket-vision-section-type.enum';

@InputType()
export class EnumBucketVisionSectionTypeFieldUpdateOperationsInput {

    @Field(() => BucketVisionSectionType, {nullable:true})
    set?: keyof typeof BucketVisionSectionType;
}
