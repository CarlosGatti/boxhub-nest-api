import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionCheckinWhereInput } from './bucket-vision-checkin-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyBucketVisionCheckinArgs {

    @Field(() => BucketVisionCheckinWhereInput, {nullable:true})
    @Type(() => BucketVisionCheckinWhereInput)
    where?: BucketVisionCheckinWhereInput;
}
