import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionCreateWithoutPortfolioInput } from './transaction-create-without-portfolio.input';
import { Type } from 'class-transformer';
import { TransactionCreateOrConnectWithoutPortfolioInput } from './transaction-create-or-connect-without-portfolio.input';
import { TransactionUpsertWithWhereUniqueWithoutPortfolioInput } from './transaction-upsert-with-where-unique-without-portfolio.input';
import { TransactionCreateManyPortfolioInputEnvelope } from './transaction-create-many-portfolio-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionWhereUniqueInput } from './transaction-where-unique.input';
import { TransactionUpdateWithWhereUniqueWithoutPortfolioInput } from './transaction-update-with-where-unique-without-portfolio.input';
import { TransactionUpdateManyWithWhereWithoutPortfolioInput } from './transaction-update-many-with-where-without-portfolio.input';
import { TransactionScalarWhereInput } from './transaction-scalar-where.input';

@InputType()
export class TransactionUncheckedUpdateManyWithoutPortfolioNestedInput {

    @Field(() => [TransactionCreateWithoutPortfolioInput], {nullable:true})
    @Type(() => TransactionCreateWithoutPortfolioInput)
    create?: Array<TransactionCreateWithoutPortfolioInput>;

    @Field(() => [TransactionCreateOrConnectWithoutPortfolioInput], {nullable:true})
    @Type(() => TransactionCreateOrConnectWithoutPortfolioInput)
    connectOrCreate?: Array<TransactionCreateOrConnectWithoutPortfolioInput>;

    @Field(() => [TransactionUpsertWithWhereUniqueWithoutPortfolioInput], {nullable:true})
    @Type(() => TransactionUpsertWithWhereUniqueWithoutPortfolioInput)
    upsert?: Array<TransactionUpsertWithWhereUniqueWithoutPortfolioInput>;

    @Field(() => TransactionCreateManyPortfolioInputEnvelope, {nullable:true})
    @Type(() => TransactionCreateManyPortfolioInputEnvelope)
    createMany?: TransactionCreateManyPortfolioInputEnvelope;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionWhereUniqueInput], {nullable:true})
    @Type(() => TransactionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionUpdateWithWhereUniqueWithoutPortfolioInput], {nullable:true})
    @Type(() => TransactionUpdateWithWhereUniqueWithoutPortfolioInput)
    update?: Array<TransactionUpdateWithWhereUniqueWithoutPortfolioInput>;

    @Field(() => [TransactionUpdateManyWithWhereWithoutPortfolioInput], {nullable:true})
    @Type(() => TransactionUpdateManyWithWhereWithoutPortfolioInput)
    updateMany?: Array<TransactionUpdateManyWithWhereWithoutPortfolioInput>;

    @Field(() => [TransactionScalarWhereInput], {nullable:true})
    @Type(() => TransactionScalarWhereInput)
    deleteMany?: Array<TransactionScalarWhereInput>;
}
