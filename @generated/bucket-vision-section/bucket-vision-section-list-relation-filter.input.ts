import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionSectionWhereInput } from './bucket-vision-section-where.input';

@InputType()
export class BucketVisionSectionListRelationFilter {

    @Field(() => BucketVisionSectionWhereInput, {nullable:true})
    every?: BucketVisionSectionWhereInput;

    @Field(() => BucketVisionSectionWhereInput, {nullable:true})
    some?: BucketVisionSectionWhereInput;

    @Field(() => BucketVisionSectionWhereInput, {nullable:true})
    none?: BucketVisionSectionWhereInput;
}
