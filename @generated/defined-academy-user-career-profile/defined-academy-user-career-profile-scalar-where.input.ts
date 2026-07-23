import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DefinedAcademyUserCareerProfileScalarWhereInput {

    @Field(() => [DefinedAcademyUserCareerProfileScalarWhereInput], {nullable:true})
    AND?: Array<DefinedAcademyUserCareerProfileScalarWhereInput>;

    @Field(() => [DefinedAcademyUserCareerProfileScalarWhereInput], {nullable:true})
    OR?: Array<DefinedAcademyUserCareerProfileScalarWhereInput>;

    @Field(() => [DefinedAcademyUserCareerProfileScalarWhereInput], {nullable:true})
    NOT?: Array<DefinedAcademyUserCareerProfileScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    academyId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    journeyId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    currentStageId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
