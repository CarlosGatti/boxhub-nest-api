import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedIntakeAnswerWhereInput } from './defined-intake-answer-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumDefinedIntakeAnswerTypeFilter } from '../prisma/enum-defined-intake-answer-type-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { DefinedIntakeFormRelationFilter } from '../defined-intake-form/defined-intake-form-relation-filter.input';

@InputType()
export class DefinedIntakeAnswerWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [DefinedIntakeAnswerWhereInput], {nullable:true})
    AND?: Array<DefinedIntakeAnswerWhereInput>;

    @Field(() => [DefinedIntakeAnswerWhereInput], {nullable:true})
    OR?: Array<DefinedIntakeAnswerWhereInput>;

    @Field(() => [DefinedIntakeAnswerWhereInput], {nullable:true})
    NOT?: Array<DefinedIntakeAnswerWhereInput>;

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

    @Field(() => DefinedIntakeFormRelationFilter, {nullable:true})
    intakeForm?: DefinedIntakeFormRelationFilter;
}
