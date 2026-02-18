import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketPinSource } from './bucket-pin-source.enum';

@InputType()
export class EnumBucketPinSourceFieldUpdateOperationsInput {

    @Field(() => BucketPinSource, {nullable:true})
    set?: keyof typeof BucketPinSource;
}
