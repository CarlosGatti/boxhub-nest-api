import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionCheckinCreateInput } from './bucket-vision-checkin-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneBucketVisionCheckinArgs {

    @Field(() => BucketVisionCheckinCreateInput, {nullable:false})
    @Type(() => BucketVisionCheckinCreateInput)
    data!: BucketVisionCheckinCreateInput;
}
