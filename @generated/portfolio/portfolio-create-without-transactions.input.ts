import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutPortfoliosInput } from '../user/user-create-nested-one-without-portfolios.input';
import { HoldingCreateNestedManyWithoutPortfolioInput } from '../holding/holding-create-nested-many-without-portfolio.input';
import { Type } from 'class-transformer';

@InputType()
export class PortfolioCreateWithoutTransactionsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    baseCurrency?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutPortfoliosInput, {nullable:false})
    user!: UserCreateNestedOneWithoutPortfoliosInput;

    @Field(() => HoldingCreateNestedManyWithoutPortfolioInput, {nullable:true})
    @Type(() => HoldingCreateNestedManyWithoutPortfolioInput)
    holdings?: HoldingCreateNestedManyWithoutPortfolioInput;
}
