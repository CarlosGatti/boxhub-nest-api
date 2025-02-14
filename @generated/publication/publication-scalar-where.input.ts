import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumVisibilityFilter } from '../prisma/enum-visibility-filter.input';

@InputType()
export class PublicationScalarWhereInput {

    @Field(() => [PublicationScalarWhereInput], {nullable:true})
    AND?: Array<PublicationScalarWhereInput>;

    @Field(() => [PublicationScalarWhereInput], {nullable:true})
    OR?: Array<PublicationScalarWhereInput>;

    @Field(() => [PublicationScalarWhereInput], {nullable:true})
    NOT?: Array<PublicationScalarWhereInput>;

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
}
