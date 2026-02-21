import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketShareType } from './bucket-share-type.enum';

@InputType()
export class EnumBucketShareTypeFieldUpdateOperationsInput {

    @Field(() => BucketShareType, {nullable:true})
    set?: keyof typeof BucketShareType;
}
