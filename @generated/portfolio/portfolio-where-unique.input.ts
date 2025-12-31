import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PortfolioWhereInput } from './portfolio-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { UserRelationFilter } from '../user/user-relation-filter.input';
import { Type } from 'class-transformer';
import { HoldingListRelationFilter } from '../holding/holding-list-relation-filter.input';
import { TransactionListRelationFilter } from '../transaction/transaction-list-relation-filter.input';

@InputType()
export class PortfolioWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [PortfolioWhereInput], {nullable:true})
    AND?: Array<PortfolioWhereInput>;

    @Field(() => [PortfolioWhereInput], {nullable:true})
    OR?: Array<PortfolioWhereInput>;

    @Field(() => [PortfolioWhereInput], {nullable:true})
    NOT?: Array<PortfolioWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    baseCurrency?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => UserRelationFilter, {nullable:true})
    @Type(() => UserRelationFilter)
    user?: UserRelationFilter;

    @Field(() => HoldingListRelationFilter, {nullable:true})
    @Type(() => HoldingListRelationFilter)
    holdings?: HoldingListRelationFilter;

    @Field(() => TransactionListRelationFilter, {nullable:true})
    @Type(() => TransactionListRelationFilter)
    transactions?: TransactionListRelationFilter;
}
