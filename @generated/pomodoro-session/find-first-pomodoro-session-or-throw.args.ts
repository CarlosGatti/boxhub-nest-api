import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroSessionWhereInput } from './pomodoro-session-where.input';
import { Type } from 'class-transformer';
import { PomodoroSessionOrderByWithRelationInput } from './pomodoro-session-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PomodoroSessionWhereUniqueInput } from './pomodoro-session-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PomodoroSessionScalarFieldEnum } from './pomodoro-session-scalar-field.enum';

@ArgsType()
export class FindFirstPomodoroSessionOrThrowArgs {

    @Field(() => PomodoroSessionWhereInput, {nullable:true})
    @Type(() => PomodoroSessionWhereInput)
    where?: PomodoroSessionWhereInput;

    @Field(() => [PomodoroSessionOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PomodoroSessionOrderByWithRelationInput>;

    @Field(() => PomodoroSessionWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PomodoroSessionWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PomodoroSessionScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PomodoroSessionScalarFieldEnum>;
}
