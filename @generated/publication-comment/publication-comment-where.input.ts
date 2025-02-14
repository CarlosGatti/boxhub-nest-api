import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PublicationRelationFilter } from '../publication/publication-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class PublicationCommentWhereInput {

    @Field(() => [PublicationCommentWhereInput], {nullable:true})
    AND?: Array<PublicationCommentWhereInput>;

    @Field(() => [PublicationCommentWhereInput], {nullable:true})
    OR?: Array<PublicationCommentWhereInput>;

    @Field(() => [PublicationCommentWhereInput], {nullable:true})
    NOT?: Array<PublicationCommentWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

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
