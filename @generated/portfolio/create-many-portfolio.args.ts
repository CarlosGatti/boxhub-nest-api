import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PortfolioCreateManyInput } from './portfolio-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPortfolioArgs {

    @Field(() => [PortfolioCreateManyInput], {nullable:false})
    @Type(() => PortfolioCreateManyInput)
    data!: Array<PortfolioCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
