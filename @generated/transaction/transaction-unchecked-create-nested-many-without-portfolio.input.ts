import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutPortfolioInput } from './transaction-create-without-portfolio.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutPortfolioInput } from './transaction-create-or-connect-without-portfolio.input';
import { TransactionCreateManyPortfolioInputEnvelope } from './transaction-create-many-portfolio-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';

@InputType()
export class TransactionUncheckedCreateNestedManyWithoutPortfolioInput {

    @Field(() => [TransactionCreateWithoutPortfolioInput], {nullable:true})
    @Type(() => TransactionCreateWithoutPortfolioInput)
    create?: Array<TransactionCreateWithoutPortfolioInput>;

    @Field(() => [TransactionCreateOrConnectWithoutPortfolioInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutPortfolioInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutPortfolioInput>;

    @Field(() => TransactionCreateManyPortfolioInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyPortfolioInputEnvelope)
    createMany?: TransactionCreateManyPortfolioInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;
}
