import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionSectionCreateManyBoardInput } from './bucket-vision-section-create-many-board.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketVisionSectionCreateManyBoardInputEnvelope {

    @Field(() => [BucketVisionSectionCreateManyBoardInput], {nullable:false})
    @Type(() => BucketVisionSectionCreateManyBoardInput)
    data!: Array<BucketVisionSectionCreateManyBoardInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
