import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PublicationLikeScalarWhereInput {

    @Field(() => [PublicationLikeScalarWhereInput], {nullable:true})
    AND?: Array<PublicationLikeScalarWhereInput>;

    @Field(() => [PublicationLikeScalarWhereInput], {nullable:true})
    OR?: Array<PublicationLikeScalarWhereInput>;

    @Field(() => [PublicationLikeScalarWhereInput], {nullable:true})
    NOT?: Array<PublicationLikeScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    publicationId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
