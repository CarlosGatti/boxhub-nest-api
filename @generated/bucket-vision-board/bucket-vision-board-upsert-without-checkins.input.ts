import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardUpdateWithoutCheckinsInput } from './bucket-vision-board-update-without-checkins.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateWithoutCheckinsInput } from './bucket-vision-board-create-without-checkins.input';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';

@InputType()
export class BucketVisionBoardUpsertWithoutCheckinsInput {

    @Field(() => BucketVisionBoardUpdateWithoutCheckinsInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateWithoutCheckinsInput)
    update!: BucketVisionBoardUpdateWithoutCheckinsInput;

    @Field(() => BucketVisionBoardCreateWithoutCheckinsInput, {nullable:false})
    @Type(() => BucketVisionBoardCreateWithoutCheckinsInput)
    create!: BucketVisionBoardCreateWithoutCheckinsInput;

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;
}
