import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PortfolioCreateInput } from './portfolio-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePortfolioArgs {

    @Field(() => PortfolioCreateInput, {nullable:false})
    @Type(() => PortfolioCreateInput)
    data!: PortfolioCreateInput;
}
