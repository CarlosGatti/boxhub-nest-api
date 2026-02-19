import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BucketVisionGoalLinkScalarWhereInput {

    @Field(() => [BucketVisionGoalLinkScalarWhereInput], {nullable:true})
    AND?: Array<BucketVisionGoalLinkScalarWhereInput>;

    @Field(() => [BucketVisionGoalLinkScalarWhereInput], {nullable:true})
    OR?: Array<BucketVisionGoalLinkScalarWhereInput>;

    @Field(() => [BucketVisionGoalLinkScalarWhereInput], {nullable:true})
    NOT?: Array<BucketVisionGoalLinkScalarWhereInput>;

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
}
