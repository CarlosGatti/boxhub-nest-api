import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { EnumVisibilityFilter } from '../prisma/enum-visibility-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class PostScalarWhereInput {

    @Field(() => [PostScalarWhereInput], {nullable:true})
    AND?: Array<PostScalarWhereInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    OR?: Array<PostScalarWhereInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    NOT?: Array<PostScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    published?: BoolFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    authorId?: IntNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    publicationId?: IntNullableFilter;

    @Field(() => EnumVisibilityFilter, {nullable:true})
    visibility?: EnumVisibilityFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    images?: StringNullableListFilter;
}
