import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BucketVisionBoardRelationFilter } from '../bucket-vision-board/bucket-vision-board-relation-filter.input';
import { BucketGoalRelationFilter } from '../bucket-goal/bucket-goal-relation-filter.input';

@InputType()
export class BucketVisionGoalLinkWhereInput {

    @Field(() => [BucketVisionGoalLinkWhereInput], {nullable:true})
    AND?: Array<BucketVisionGoalLinkWhereInput>;

    @Field(() => [BucketVisionGoalLinkWhereInput], {nullable:true})
    OR?: Array<BucketVisionGoalLinkWhereInput>;

    @Field(() => [BucketVisionGoalLinkWhereInput], {nullable:true})
    NOT?: Array<BucketVisionGoalLinkWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    boardId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    goalId?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    label?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => BucketVisionBoardRelationFilter, {nullable:true})
    board?: BucketVisionBoardRelationFilter;

    @Field(() => BucketGoalRelationFilter, {nullable:true})
    goal?: BucketGoalRelationFilter;
}
