import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketMediaType } from './bucket-media-type.enum';

@InputType()
export class EnumBucketMediaTypeFieldUpdateOperationsInput {

    @Field(() => BucketMediaType, {nullable:true})
    set?: keyof typeof BucketMediaType;
}
