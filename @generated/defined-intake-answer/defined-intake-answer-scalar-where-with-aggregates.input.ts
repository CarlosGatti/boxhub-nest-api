import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumDefinedIntakeAnswerTypeWithAggregatesFilter } from '../prisma/enum-defined-intake-answer-type-with-aggregates-filter.input';
import { JsonWithAggregatesFilter } from '../prisma/json-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DefinedIntakeAnswerScalarWhereWithAggregatesInput {

    @Field(() => [DefinedIntakeAnswerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DefinedIntakeAnswerScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedIntakeAnswerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DefinedIntakeAnswerScalarWhereWithAggregatesInput>;

    @Field(() => [DefinedIntakeAnswerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DefinedIntakeAnswerScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    intakeFormId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    questionKey?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    questionLabel?: StringNullableWithAggregatesFilter;

    @Field(() => EnumDefinedIntakeAnswerTypeWithAggregatesFilter, {nullable:true})
    answerType?: EnumDefinedIntakeAnswerTypeWithAggregatesFilter;

    @Field(() => JsonWithAggregatesFilter, {nullable:true})
    answerValue?: JsonWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
