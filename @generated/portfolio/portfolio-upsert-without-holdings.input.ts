import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioUpdateWithoutHoldingsInput } from './portfolio-update-without-holdings.input';
import { Type } from 'class-transformer';
import { PortfolioCreateWithoutHoldingsInput } from './portfolio-create-without-holdings.input';
import { PortfolioWhereInput } from './portfolio-where.input';

@InputType()
export class PortfolioUpsertWithoutHoldingsInput {

    @Field(() => PortfolioUpdateWithoutHoldingsInput, {nullable:false})
    @Type(() => PortfolioUpdateWithoutHoldingsInput)
    update!: PortfolioUpdateWithoutHoldingsInput;

    @Field(() => PortfolioCreateWithoutHoldingsInput, {nullable:false})
    @Type(() => PortfolioCreateWithoutHoldingsInput)
    create!: PortfolioCreateWithoutHoldingsInput;

    @Field(() => PortfolioWhereInput, {nullable:true})
    @Type(() => PortfolioWhereInput)
    where?: PortfolioWhereInput;
}
