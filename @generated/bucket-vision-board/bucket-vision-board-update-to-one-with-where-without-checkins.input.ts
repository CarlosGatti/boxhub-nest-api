import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardUpdateWithoutCheckinsInput } from './bucket-vision-board-update-without-checkins.input';

@InputType()
export class BucketVisionBoardUpdateToOneWithWhereWithoutCheckinsInput {

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;

    @Field(() => BucketVisionBoardUpdateWithoutCheckinsInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateWithoutCheckinsInput)
    data!: BucketVisionBoardUpdateWithoutCheckinsInput;
}
