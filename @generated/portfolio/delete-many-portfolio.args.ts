import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PortfolioWhereInput } from './portfolio-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPortfolioArgs {

    @Field(() => PortfolioWhereInput, {nullable:true})
    @Type(() => PortfolioWhereInput)
    where?: PortfolioWhereInput;
}
