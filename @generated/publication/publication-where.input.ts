import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumVisibilityFilter } from '../prisma/enum-visibility-filter.input';
import { CommunityNullableRelationFilter } from '../community/community-nullable-relation-filter.input';
import { EventNullableRelationFilter } from '../event/event-nullable-relation-filter.input';
import { PostRelationFilter } from '../post/post-relation-filter.input';
import { UserNullableRelationFilter } from '../user/user-nullable-relation-filter.input';
import { PublicationCommentListRelationFilter } from '../publication-comment/publication-comment-list-relation-filter.input';
import { PublicationLikeListRelationFilter } from '../publication-like/publication-like-list-relation-filter.input';

@InputType()
export class PublicationWhereInput {

    @Field(() => [PublicationWhereInput], {nullable:true})
    AND?: Array<PublicationWhereInput>;

    @Field(() => [PublicationWhereInput], {nullable:true})
    OR?: Array<PublicationWhereInput>;

    @Field(() => [PublicationWhereInput], {nullable:true})
    NOT?: Array<PublicationWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    published?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    userId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    postId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => EnumVisibilityFilter, {nullable:true})
    visibility?: EnumVisibilityFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    eventId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    communityId?: IntNullableFilter;

    @Field(() => CommunityNullableRelationFilter, {nullable:true})
    community?: CommunityNullableRelationFilter;

    @Field(() => EventNullableRelationFilter, {nullable:true})
    event?: EventNullableRelationFilter;

    @Field(() => PostRelationFilter, {nullable:true})
    post?: PostRelationFilter;

    @Field(() => UserNullableRelationFilter, {nullable:true})
    user?: UserNullableRelationFilter;

    @Field(() => PublicationCommentListRelationFilter, {nullable:true})
    comments?: PublicationCommentListRelationFilter;

    @Field(() => PublicationLikeListRelationFilter, {nullable:true})
    likes?: PublicationLikeListRelationFilter;
}
