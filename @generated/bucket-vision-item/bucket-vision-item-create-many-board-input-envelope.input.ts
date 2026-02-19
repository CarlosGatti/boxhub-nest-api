import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionItemCreateManyBoardInput } from './bucket-vision-item-create-many-board.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketVisionItemCreateManyBoardInputEnvelope {

    @Field(() => [BucketVisionItemCreateManyBoardInput], {nullable:false})
    @Type(() => BucketVisionItemCreateManyBoardInput)
    data!: Array<BucketVisionItemCreateManyBoardInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
