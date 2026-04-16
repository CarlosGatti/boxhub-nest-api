import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedInternalNoteScalarWhereInput {

    @Field(() => [DefinedInternalNoteScalarWhereInput], {nullable:true})
    AND?: Array<DefinedInternalNoteScalarWhereInput>;

    @Field(() => [DefinedInternalNoteScalarWhereInput], {nullable:true})
    OR?: Array<DefinedInternalNoteScalarWhereInput>;

    @Field(() => [DefinedInternalNoteScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedInternalNoteScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    clientId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    projectId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    authorId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    body?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
