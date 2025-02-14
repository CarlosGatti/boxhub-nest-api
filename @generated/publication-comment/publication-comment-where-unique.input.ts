import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PublicationCommentWhereInput } from './publication-comment-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PublicationRelationFilter } from '../publication/publication-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class PublicationCommentWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PublicationCommentWhereInput], {nullable:true})
    AND?: Array<PublicationCommentWhereInput>;

    @Field(() => [PublicationCommentWhereInput], {nullable:true})
    OR?: Array<PublicationCommentWhereInput>;

    @Field(() => [PublicationCommentWhereInput], {nullable:true})
    NOT?: Array<PublicationCommentWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    publicationId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => PublicationRelationFilter, {nullable:true})
    publication?: PublicationRelationFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    user?: UserRelationFilter;
}
