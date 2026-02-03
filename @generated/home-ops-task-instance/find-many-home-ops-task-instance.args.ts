import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HomeOpsTaskInstanceWhereInput } from './home-ops-task-instance-where.input';
import { Type } from 'class-transformer';
import { HomeOpsTaskInstanceOrderByWithRelationInput } from './home-ops-task-instance-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HomeOpsTaskInstanceWhereUniqueInput } from './home-ops-task-instance-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HomeOpsTaskInstanceScalarFieldEnum } from './home-ops-task-instance-scalar-field.enum';

@ArgsType()
export class FindManyHomeOpsTaskInstanceArgs {

    @Field(() => HomeOpsTaskInstanceWhereInput, {nullable:true})
    @Type(() => HomeOpsTaskInstanceWhereInput)
    where?: HomeOpsTaskInstanceWhereInput;

    @Field(() => [HomeOpsTaskInstanceOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HomeOpsTaskInstanceOrderByWithRelationInput>;

    @Field(() => HomeOpsTaskInstanceWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HomeOpsTaskInstanceWhereUniqueInput, 'id' | 'weeklyPlanId_sourceKey'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HomeOpsTaskInstanceScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof HomeOpsTaskInstanceScalarFieldEnum>;
}
