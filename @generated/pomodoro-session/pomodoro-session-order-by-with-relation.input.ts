import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';
import { PomodoroTaskOrderByWithRelationInput } from '../pomodoro-task/pomodoro-task-order-by-with-relation.input';
import { DefinedProjectOrderByWithRelationInput } from '../defined-project/defined-project-order-by-with-relation.input';

@InputType()
export class PomodoroSessionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    taskId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    mode?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    durationMinutes?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startedAt?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    pausedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    resumedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    completedAt?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    cancelledAt?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    user?: UserOrderByWithRelationInput;

    @Field(() => PomodoroTaskOrderByWithRelationInput, {nullable:true})
    task?: PomodoroTaskOrderByWithRelationInput;

    @Field(() => DefinedProjectOrderByWithRelationInput, {nullable:true})
    project?: DefinedProjectOrderByWithRelationInput;
}
