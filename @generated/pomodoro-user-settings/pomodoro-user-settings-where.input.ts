import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';

@InputType()
export class PomodoroUserSettingsWhereInput {

    @Field(() => [PomodoroUserSettingsWhereInput], {nullable:true})
    AND?: Array<PomodoroUserSettingsWhereInput>;

    @Field(() => [PomodoroUserSettingsWhereInput], {nullable:true})
    OR?: Array<PomodoroUserSettingsWhereInput>;

    @Field(() => [PomodoroUserSettingsWhereInput], {nullable:true})
    NOT?: Array<PomodoroUserSettingsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    focusMinutes?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    shortBreakMinutes?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    longBreakMinutes?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    longBreakEvery?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    autoStartBreaks?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    autoStartFocus?: BoolFilter;

    @Field(() => StringFilter, {nullable:true})
    timezone?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;
}
