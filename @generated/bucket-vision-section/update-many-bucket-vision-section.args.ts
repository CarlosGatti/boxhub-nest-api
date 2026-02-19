import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionSectionUpdateManyMutationInput } from './bucket-vision-section-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BucketVisionSectionWhereInput } from './bucket-vision-section-where.input';

@ArgsType()
export class UpdateManyBucketVisionSectionArgs {

    @Field(() => BucketVisionSectionUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketVisionSectionUpdateManyMutationInput)
    data!: BucketVisionSectionUpdateManyMutationInput;

    @Field(() => BucketVisionSectionWhereInput, {nullable:true})
    @Type(() => BucketVisionSectionWhereInput)
    where?: BucketVisionSectionWhereInput;
}
