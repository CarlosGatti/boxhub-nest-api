import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LogCommentScalarWhereInput {

    @Field(() => [LogCommentScalarWhereInput], {nullable:true})
    AND?: Array<LogCommentScalarWhereInput>;

    @Field(() => [LogCommentScalarWhereInput], {nullable:true})
    OR?: Array<LogCommentScalarWhereInput>;

    @Field(() => [LogCommentScalarWhereInput], {nullable:true})
    NOT?: Array<LogCommentScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    logId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    content?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
