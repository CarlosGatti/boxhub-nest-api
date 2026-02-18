import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BucketGoalRelationFilter } from '../bucket-goal/bucket-goal-relation-filter.input';
import { BucketGoalMediaListRelationFilter } from '../bucket-goal-media/bucket-goal-media-list-relation-filter.input';

@InputType()
export class BucketGoalLogWhereInput {

    @Field(() => [BucketGoalLogWhereInput], {nullable:true})
    AND?: Array<BucketGoalLogWhereInput>;

    @Field(() => [BucketGoalLogWhereInput], {nullable:true})
    OR?: Array<BucketGoalLogWhereInput>;

    @Field(() => [BucketGoalLogWhereInput], {nullable:true})
    NOT?: Array<BucketGoalLogWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    goalId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    note?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    happenedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => BucketGoalRelationFilter, {nullable:true})
    goal?: BucketGoalRelationFilter;

    @Field(() => BucketGoalMediaListRelationFilter, {nullable:true})
    media?: BucketGoalMediaListRelationFilter;
}
