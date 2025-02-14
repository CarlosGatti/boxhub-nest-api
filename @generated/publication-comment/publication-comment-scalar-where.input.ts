import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PublicationCommentScalarWhereInput {

    @Field(() => [PublicationCommentScalarWhereInput], {nullable:true})
    AND?: Array<PublicationCommentScalarWhereInput>;

    @Field(() => [PublicationCommentScalarWhereInput], {nullable:true})
    OR?: Array<PublicationCommentScalarWhereInput>;

    @Field(() => [PublicationCommentScalarWhereInput], {nullable:true})
    NOT?: Array<PublicationCommentScalarWhereInput>;

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
}
