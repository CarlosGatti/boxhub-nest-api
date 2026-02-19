import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardUpdateWithoutGoalLinksInput } from './bucket-vision-board-update-without-goal-links.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardCreateWithoutGoalLinksInput } from './bucket-vision-board-create-without-goal-links.input';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';

@InputType()
export class BucketVisionBoardUpsertWithoutGoalLinksInput {

    @Field(() => BucketVisionBoardUpdateWithoutGoalLinksInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateWithoutGoalLinksInput)
    update!: BucketVisionBoardUpdateWithoutGoalLinksInput;

    @Field(() => BucketVisionBoardCreateWithoutGoalLinksInput, {nullable:false})
    @Type(() => BucketVisionBoardCreateWithoutGoalLinksInput)
    create!: BucketVisionBoardCreateWithoutGoalLinksInput;

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;
}
