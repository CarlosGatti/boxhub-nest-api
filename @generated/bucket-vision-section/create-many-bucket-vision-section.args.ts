import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionSectionCreateManyInput } from './bucket-vision-section-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBucketVisionSectionArgs {

    @Field(() => [BucketVisionSectionCreateManyInput], {nullable:false})
    @Type(() => BucketVisionSectionCreateManyInput)
    data!: Array<BucketVisionSectionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
