import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionCheckinCreateManyBoardInput } from './bucket-vision-checkin-create-many-board.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketVisionCheckinCreateManyBoardInputEnvelope {

    @Field(() => [BucketVisionCheckinCreateManyBoardInput], {nullable:false})
    @Type(() => BucketVisionCheckinCreateManyBoardInput)
    data!: Array<BucketVisionCheckinCreateManyBoardInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
