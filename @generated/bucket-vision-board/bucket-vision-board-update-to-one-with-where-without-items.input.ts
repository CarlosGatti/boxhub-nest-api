import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardUpdateWithoutItemsInput } from './bucket-vision-board-update-without-items.input';

@InputType()
export class BucketVisionBoardUpdateToOneWithWhereWithoutItemsInput {

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;

    @Field(() => BucketVisionBoardUpdateWithoutItemsInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateWithoutItemsInput)
    data!: BucketVisionBoardUpdateWithoutItemsInput;
}
