import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionCheckinWhereInput } from './bucket-vision-checkin-where.input';

@InputType()
export class BucketVisionCheckinListRelationFilter {

    @Field(() => BucketVisionCheckinWhereInput, {nullable:true})
    every?: BucketVisionCheckinWhereInput;

    @Field(() => BucketVisionCheckinWhereInput, {nullable:true})
    some?: BucketVisionCheckinWhereInput;

    @Field(() => BucketVisionCheckinWhereInput, {nullable:true})
    none?: BucketVisionCheckinWhereInput;
}
