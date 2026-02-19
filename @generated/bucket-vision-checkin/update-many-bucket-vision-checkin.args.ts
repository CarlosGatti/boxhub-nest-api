import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionCheckinUpdateManyMutationInput } from './bucket-vision-checkin-update-many-mutation.input';
import { Type } from 'class-transformer';
import { BucketVisionCheckinWhereInput } from './bucket-vision-checkin-where.input';

@ArgsType()
export class UpdateManyBucketVisionCheckinArgs {

    @Field(() => BucketVisionCheckinUpdateManyMutationInput, {nullable:false})
    @Type(() => BucketVisionCheckinUpdateManyMutationInput)
    data!: BucketVisionCheckinUpdateManyMutationInput;

    @Field(() => BucketVisionCheckinWhereInput, {nullable:true})
    @Type(() => BucketVisionCheckinWhereInput)
    where?: BucketVisionCheckinWhereInput;
}
