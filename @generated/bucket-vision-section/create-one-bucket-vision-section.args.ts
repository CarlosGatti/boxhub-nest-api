import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionSectionCreateInput } from './bucket-vision-section-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBucketVisionSectionArgs {

    @Field(() => BucketVisionSectionCreateInput, {nullable:false})
    @Type(() => BucketVisionSectionCreateInput)
    data!: BucketVisionSectionCreateInput;
}
