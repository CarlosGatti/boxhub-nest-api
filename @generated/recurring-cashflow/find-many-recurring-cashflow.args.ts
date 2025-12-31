import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecurringCashflowWhereInput } from './recurring-cashflow-where.input';
import { Type } from 'class-transformer';
import { RecurringCashflowOrderByWithRelationInput } from './recurring-cashflow-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { RecurringCashflowWhereUniqueInput } from './recurring-cashflow-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecurringCashflowScalarFieldEnum } from './recurring-cashflow-scalar-field.enum';

@ArgsType()
export class FindManyRecurringCashflowArgs {

    @Field(() => RecurringCashflowWhereInput, {nullable:true})
    @Type(() => RecurringCashflowWhereInput)
    where?: RecurringCashflowWhereInput;

    @Field(() => [RecurringCashflowOrderByWithRelationInput], {nullable:true})
    @Type(() => RecurringCashflowOrderByWithRelationInput)
    orderBy?: Array<RecurringCashflowOrderByWithRelationInput>;

    @Field(() => RecurringCashflowWhereUniqueInput, {nullable:true})
    @Type(() => RecurringCashflowWhereUniqueInput)
    cursor?: Prisma.AtLeast<RecurringCashflowWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecurringCashflowScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RecurringCashflowScalarFieldEnum>;
}
