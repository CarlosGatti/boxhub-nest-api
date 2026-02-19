import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardUpdateWithoutItemsInput } from './bucket-vision-board-update-without-items.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateWithoutItemsInput } from './bucket-vision-board-create-without-items.input';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';

@InputType()
export class BucketVisionBoardUpsertWithoutItemsInput {

    @Field(() => BucketVisionBoardUpdateWithoutItemsInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateWithoutItemsInput)
    update!: BucketVisionBoardUpdateWithoutItemsInput;

    @Field(() => BucketVisionBoardCreateWithoutItemsInput, {nullable:false})
    @Type(() => BucketVisionBoardCreateWithoutItemsInput)
    create!: BucketVisionBoardCreateWithoutItemsInput;

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;
}
