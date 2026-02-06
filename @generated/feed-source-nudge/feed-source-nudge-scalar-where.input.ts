import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FeedSourceNudgeScalarWhereInput {

    @Field(() => [FeedSourceNudgeScalarWhereInput], {nullable:true})
    AND?: Array<FeedSourceNudgeScalarWhereInput>;

    @Field(() => [FeedSourceNudgeScalarWhereInput], {nullable:true})
    OR?: Array<FeedSourceNudgeScalarWhereInput>;

    @Field(() => [FeedSourceNudgeScalarWhereInput], {nullable:true})
    NOT?: Array<FeedSourceNudgeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    sourceId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    reason?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
