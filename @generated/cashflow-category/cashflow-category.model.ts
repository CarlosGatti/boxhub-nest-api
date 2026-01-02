import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CashflowType } from '../prisma/cashflow-type.enum';
import { User } from '../user/user.model';
import { CashflowEntry } from '../cashflow-entry/cashflow-entry.model';
import { RecurringCashflow } from '../recurring-cashflow/recurring-cashflow.model';
import { CashflowCategoryCount } from './cashflow-category-count.output';

@ObjectType()
export class CashflowCategory {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CashflowType, {nullable:false})
    type!: keyof typeof CashflowType;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => String, {nullable:true})
    icon!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => [CashflowEntry], {nullable:true})
    entries?: Array<CashflowEntry>;

    @Field(() => [RecurringCashflow], {nullable:true})
    recurring?: Array<RecurringCashflow>;

    @Field(() => CashflowCategoryCount, {nullable:false})
    _count?: CashflowCategoryCount;
}
