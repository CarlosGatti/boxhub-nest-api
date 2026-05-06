import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroUserSettingsWhereInput } from './pomodoro-user-settings-where.input';
import { Type } from 'class-transformer';
import { PomodoroUserSettingsOrderByWithRelationInput } from './pomodoro-user-settings-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PomodoroUserSettingsWhereUniqueInput } from './pomodoro-user-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PomodoroUserSettingsCountAggregateInput } from './pomodoro-user-settings-count-aggregate.input';
import { PomodoroUserSettingsAvgAggregateInput } from './pomodoro-user-settings-avg-aggregate.input';
import { PomodoroUserSettingsSumAggregateInput } from './pomodoro-user-settings-sum-aggregate.input';
import { PomodoroUserSettingsMinAggregateInput } from './pomodoro-user-settings-min-aggregate.input';
import { PomodoroUserSettingsMaxAggregateInput } from './pomodoro-user-settings-max-aggregate.input';

@ArgsType()
export class PomodoroUserSettingsAggregateArgs {

    @Field(() => PomodoroUserSettingsWhereInput, {nullable:true})
    @Type(() => PomodoroUserSettingsWhereInput)
    where?: PomodoroUserSettingsWhereInput;

    @Field(() => [PomodoroUserSettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PomodoroUserSettingsOrderByWithRelationInput>;

    @Field(() => PomodoroUserSettingsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PomodoroUserSettingsWhereUniqueInput, 'userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => PomodoroUserSettingsCountAggregateInput, {nullable:true})
    _count?: PomodoroUserSettingsCountAggregateInput;

    @Field(() => PomodoroUserSettingsAvgAggregateInput, {nullable:true})
    _avg?: PomodoroUserSettingsAvgAggregateInput;

    @Field(() => PomodoroUserSettingsSumAggregateInput, {nullable:true})
    _sum?: PomodoroUserSettingsSumAggregateInput;

    @Field(() => PomodoroUserSettingsMinAggregateInput, {nullable:true})
    _min?: PomodoroUserSettingsMinAggregateInput;

    @Field(() => PomodoroUserSettingsMaxAggregateInput, {nullable:true})
    _max?: PomodoroUserSettingsMaxAggregateInput;
}
