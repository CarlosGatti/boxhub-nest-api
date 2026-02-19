import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BucketVisionGoalLinkCreateManyBoardInput } from './bucket-vision-goal-link-create-many-board.input';
import { Type } from 'class-transformer';

@InputType()
export class BucketVisionGoalLinkCreateManyBoardInputEnvelope {

    @Field(() => [BucketVisionGoalLinkCreateManyBoardInput], {nullable:false})
    @Type(() => BucketVisionGoalLinkCreateManyBoardInput)
    data!: Array<BucketVisionGoalLinkCreateManyBoardInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
