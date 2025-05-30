import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class FollowsWhereInput {

    @Field(() => [FollowsWhereInput], {nullable:true})
    AND?: Array<FollowsWhereInput>;

    @Field(() => [FollowsWhereInput], {nullable:true})
    OR?: Array<FollowsWhereInput>;

    @Field(() => [FollowsWhereInput], {nullable:true})
    NOT?: Array<FollowsWhereInput>;

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

    @Field(() => UserRelationFilter, {nullable:true})
    follower?: UserRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    following?: UserRelationFilter;
}
