import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioScalarWhereInput } from './portfolio-scalar-where.input';
import { Type } from 'class-transformer';
import { PortfolioUpdateManyMutationInput } from './portfolio-update-many-mutation.input';

@InputType()
export class PortfolioUpdateManyWithWhereWithoutUserInput {

    @Field(() => PortfolioScalarWhereInput, {nullable:false})
    @Type(() => PortfolioScalarWhereInput)
    where!: PortfolioScalarWhereInput;

    @Field(() => PortfolioUpdateManyMutationInput, {nullable:false})
    @Type(() => PortfolioUpdateManyMutationInput)
    data!: PortfolioUpdateManyMutationInput;
}
