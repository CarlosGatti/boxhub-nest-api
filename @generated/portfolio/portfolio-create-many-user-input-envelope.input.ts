import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioCreateManyUserInput } from './portfolio-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class PortfolioCreateManyUserInputEnvelope {

    @Field(() => [PortfolioCreateManyUserInput], {nullable:false})
    @Type(() => PortfolioCreateManyUserInput)
    data!: Array<PortfolioCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
