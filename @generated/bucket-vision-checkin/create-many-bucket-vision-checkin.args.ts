import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BucketVisionCheckinCreateManyInput } from './bucket-vision-checkin-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyBucketVisionCheckinArgs {

    @Field(() => [BucketVisionCheckinCreateManyInput], {nullable:false})
    @Type(() => BucketVisionCheckinCreateManyInput)
    data!: Array<BucketVisionCheckinCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
