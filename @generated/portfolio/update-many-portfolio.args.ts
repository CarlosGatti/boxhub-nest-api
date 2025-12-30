import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PortfolioUpdateManyMutationInput } from './portfolio-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PortfolioWhereInput } from './portfolio-where.input';

@ArgsType()
export class UpdateManyPortfolioArgs {

    @Field(() => PortfolioUpdateManyMutationInput, {nullable:false})
    @Type(() => PortfolioUpdateManyMutationInput)
    data!: PortfolioUpdateManyMutationInput;

    @Field(() => PortfolioWhereInput, {nullable:true})
    @Type(() => PortfolioWhereInput)
    where?: PortfolioWhereInput;
}
