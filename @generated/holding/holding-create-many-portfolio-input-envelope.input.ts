import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HoldingCreateManyPortfolioInput } from './holding-create-many-portfolio.input';
import { Type } from 'class-transformer';

@InputType()
export class HoldingCreateManyPortfolioInputEnvelope {

    @Field(() => [HoldingCreateManyPortfolioInput], {nullable:false})
    @Type(() => HoldingCreateManyPortfolioInput)
    data!: Array<HoldingCreateManyPortfolioInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
