import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CashflowType } from '../prisma/cashflow-type.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from '@prisma/client/runtime/library';
import { User } from '../user/user.model';
import { CashflowCategory } from '../cashflow-category/cashflow-category.model';

@ObjectType()
export class CashflowEntry {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    categoryId!: number;

    @Field(() => CashflowType, {nullable:false})
    type!: keyof typeof CashflowType;

    @Field(() => GraphQLDecimal, {nullable:false})
    amount!: Decimal;

    @Field(() => String, {nullable:true})
    source!: string | null;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    date!: Date;

    @Field(() => String, {nullable:true})
    notes!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => User, {nullable:false})
    user?: User;

    @Field(() => CashflowCategory, {nullable:false})
    category?: CashflowCategory;
}
