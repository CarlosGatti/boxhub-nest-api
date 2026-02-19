import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionSectionWhereInput } from './bucket-vision-section-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBucketVisionSectionArgs {

    @Field(() => BucketVisionSectionWhereInput, {nullable:true})
    @Type(() => BucketVisionSectionWhereInput)
    where?: BucketVisionSectionWhereInput;
}
