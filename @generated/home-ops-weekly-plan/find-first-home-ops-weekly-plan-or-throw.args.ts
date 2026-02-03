import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanWhereInput } from './home-ops-weekly-plan-where.input';
import { Type } from 'class-transformer';
import { HomeOpsWeeklyPlanOrderByWithRelationInput } from './home-ops-weekly-plan-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsWeeklyPlanWhereUniqueInput } from './home-ops-weekly-plan-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsWeeklyPlanScalarFieldEnum } from './home-ops-weekly-plan-scalar-field.enum';

@ArgsType()
export class FindFirstHomeOpsWeeklyPlanOrThrowArgs {

    @Field(() => HomeOpsWeeklyPlanWhereInput, {nullable:true})
    @Type(() => HomeOpsWeeklyPlanWhereInput)
    where?: HomeOpsWeeklyPlanWhereInput;

    @Field(() => [HomeOpsWeeklyPlanOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsWeeklyPlanOrderByWithRelationInput>;

    @Field(() => HomeOpsWeeklyPlanWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsWeeklyPlanWhereUniqueInput, 'id' | 'householdId_weekStartDate'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HomeOpsWeeklyPlanScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeOpsWeeklyPlanScalarFieldEnum>;
}
