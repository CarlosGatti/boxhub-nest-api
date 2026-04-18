import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedIntakeAnswerTypeFilter } from '../prisma/enum-defined-intake-answer-type-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedIntakeAnswerScalarWhereInput {

    @Field(() => [DefinedIntakeAnswerScalarWhereInput], {nullable:true})
    AND?: Array<DefinedIntakeAnswerScalarWhereInput>;

    @Field(() => [DefinedIntakeAnswerScalarWhereInput], {nullable:true})
    OR?: Array<DefinedIntakeAnswerScalarWhereInput>;

    @Field(() => [DefinedIntakeAnswerScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedIntakeAnswerScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    intakeFormId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    questionKey?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    questionLabel?: StringNullableFilter;

    @Field(() => EnumDefinedIntakeAnswerTypeFilter, {nullable:true})
    answerType?: EnumDefinedIntakeAnswerTypeFilter;

    @Field(() => JsonFilter, {nullable:true})
    answerValue?: JsonFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
