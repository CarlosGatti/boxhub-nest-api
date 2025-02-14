import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class FollowsScalarWhereInput {

    @Field(() => [FollowsScalarWhereInput], {nullable:true})
    AND?: Array<FollowsScalarWhereInput>;

    @Field(() => [FollowsScalarWhereInput], {nullable:true})
    OR?: Array<FollowsScalarWhereInput>;

    @Field(() => [FollowsScalarWhereInput], {nullable:true})
    NOT?: Array<FollowsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    followerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    followingId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
