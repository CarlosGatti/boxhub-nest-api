import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PublicationLikeWhereInput } from './publication-like-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { PublicationRelationFilter } from '../publication/publication-relation-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';

@InputType()
export class PublicationLikeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PublicationLikeWhereInput], {nullable:true})
    AND?: Array<PublicationLikeWhereInput>;

    @Field(() => [PublicationLikeWhereInput], {nullable:true})
    OR?: Array<PublicationLikeWhereInput>;

    @Field(() => [PublicationLikeWhereInput], {nullable:true})
    NOT?: Array<PublicationLikeWhereInput>;

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
