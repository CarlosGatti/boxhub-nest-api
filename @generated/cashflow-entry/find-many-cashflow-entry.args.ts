import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CashflowEntryWhereInput } from './cashflow-entry-where.input';
import { Type } from 'class-transformer';
import { CashflowEntryOrderByWithRelationInput } from './cashflow-entry-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CashflowEntryWhereUniqueInput } from './cashflow-entry-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CashflowEntryScalarFieldEnum } from './cashflow-entry-scalar-field.enum';

@ArgsType()
export class FindManyCashflowEntryArgs {

    @Field(() => CashflowEntryWhereInput, {nullable:true})
    @Type(() => CashflowEntryWhereInput)
    where?: CashflowEntryWhereInput;

    @Field(() => [CashflowEntryOrderByWithRelationInput], {nullable:true})
    @Type(() => CashflowEntryOrderByWithRelationInput)
    orderBy?: Array<CashflowEntryOrderByWithRelationInput>;

    @Field(() => CashflowEntryWhereUniqueInput, {nullable:true})
    @Type(() => CashflowEntryWhereUniqueInput)
    cursor?: Prisma.AtLeast<CashflowEntryWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [CashflowEntryScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof CashflowEntryScalarFieldEnum>;
}
