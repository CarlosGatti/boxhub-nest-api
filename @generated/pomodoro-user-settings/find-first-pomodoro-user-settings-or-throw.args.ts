import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroUserSettingsWhereInput } from './pomodoro-user-settings-where.input';
import { Type } from 'class-transformer';
import { PomodoroUserSettingsOrderByWithRelationInput } from './pomodoro-user-settings-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PomodoroUserSettingsWhereUniqueInput } from './pomodoro-user-settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PomodoroUserSettingsScalarFieldEnum } from './pomodoro-user-settings-scalar-field.enum';

@ArgsType()
export class FindFirstPomodoroUserSettingsOrThrowArgs {

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

    @Field(() => [PomodoroUserSettingsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PomodoroUserSettingsScalarFieldEnum>;
}
