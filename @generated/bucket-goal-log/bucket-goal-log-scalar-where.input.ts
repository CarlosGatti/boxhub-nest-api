import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class BucketGoalLogScalarWhereInput {

    @Field(() => [BucketGoalLogScalarWhereInput], {nullable:true})
    AND?: Array<BucketGoalLogScalarWhereInput>;

    @Field(() => [BucketGoalLogScalarWhereInput], {nullable:true})
    OR?: Array<BucketGoalLogScalarWhereInput>;

    @Field(() => [BucketGoalLogScalarWhereInput], {nullable:true})
    NOT?: Array<BucketGoalLogScalarWhereInput>;

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
}
