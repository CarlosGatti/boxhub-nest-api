import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionBoardWhereInput } from './bucket-vision-board-where.input';
import { Type } from 'class-transformer';
import { BucketVisionBoardUpdateWithoutGoalLinksInput } from './bucket-vision-board-update-without-goal-links.input';

@InputType()
export class BucketVisionBoardUpdateToOneWithWhereWithoutGoalLinksInput {

    @Field(() => BucketVisionBoardWhereInput, {nullable:true})
    @Type(() => BucketVisionBoardWhereInput)
    where?: BucketVisionBoardWhereInput;

    @Field(() => BucketVisionBoardUpdateWithoutGoalLinksInput, {nullable:false})
    @Type(() => BucketVisionBoardUpdateWithoutGoalLinksInput)
    data!: BucketVisionBoardUpdateWithoutGoalLinksInput;
}
