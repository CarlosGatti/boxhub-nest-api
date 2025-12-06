import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class UserAppAccessScalarWhereWithAggregatesInput {

    @Field(() => [UserAppAccessScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserAppAccessScalarWhereWithAggregatesInput>;

    @Field(() => [UserAppAccessScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserAppAccessScalarWhereWithAggregatesInput>;

    @Field(() => [UserAppAccessScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserAppAccessScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    appId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
