import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PomodoroTaskWhereInput } from './pomodoro-task-where.input';
import { Type } from 'class-transformer';
import { PomodoroTaskOrderByWithRelationInput } from './pomodoro-task-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PomodoroTaskWhereUniqueInput } from './pomodoro-task-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PomodoroTaskScalarFieldEnum } from './pomodoro-task-scalar-field.enum';

@ArgsType()
export class FindFirstPomodoroTaskOrThrowArgs {

    @Field(() => PomodoroTaskWhereInput, {nullable:true})
    @Type(() => PomodoroTaskWhereInput)
    where?: PomodoroTaskWhereInput;

    @Field(() => [PomodoroTaskOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PomodoroTaskOrderByWithRelationInput>;

    @Field(() => PomodoroTaskWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PomodoroTaskWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PomodoroTaskScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PomodoroTaskScalarFieldEnum>;
}
