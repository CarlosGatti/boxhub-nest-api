import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioWhereInput } from './portfolio-where.input';
import { Type } from 'class-transformer';
import { PortfolioUpdateWithoutHoldingsInput } from './portfolio-update-without-holdings.input';

@InputType()
export class PortfolioUpdateToOneWithWhereWithoutHoldingsInput {

    @Field(() => PortfolioWhereInput, {nullable:true})
    @Type(() => PortfolioWhereInput)
    where?: PortfolioWhereInput;

    @Field(() => PortfolioUpdateWithoutHoldingsInput, {nullable:false})
    @Type(() => PortfolioUpdateWithoutHoldingsInput)
    data!: PortfolioUpdateWithoutHoldingsInput;
}
