import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPortfoliosInput } from '../user/user-create-nested-one-without-portfolios.input';
import { Type } from 'class-transformer';
import { TransactionCreateNestedManyWithoutPortfolioInput } from '../transaction/transaction-create-nested-many-without-portfolio.input';

@InputType()
export class PortfolioCreateWithoutHoldingsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    baseCurrency?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPortfoliosInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutPortfoliosInput)
    user!: UserCreateNestedOneWithoutPortfoliosInput;

    @Field(() => TransactionCreateNestedManyWithoutPortfolioInput, {nullable:true})
    @Type(() => TransactionCreateNestedManyWithoutPortfolioInput)
    transactions?: TransactionCreateNestedManyWithoutPortfolioInput;
}
