import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HoldingCreateWithoutPortfolioInput } from './holding-create-without-portfolio.input';
import { Type } from 'class-transformer';
import { HoldingCreateOrConnectWithoutPortfolioInput } from './holding-create-or-connect-without-portfolio.input';
import { HoldingCreateManyPortfolioInputEnvelope } from './holding-create-many-portfolio-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';

@InputType()
export class HoldingUncheckedCreateNestedManyWithoutPortfolioInput {

    @Field(() => [HoldingCreateWithoutPortfolioInput], {nullable:true})
    @Type(() => HoldingCreateWithoutPortfolioInput)
    create?: Array<HoldingCreateWithoutPortfolioInput>;

    @Field(() => [HoldingCreateOrConnectWithoutPortfolioInput], {nullable:true})
    @Type(() => HoldingCreateOrConnectWithoutPortfolioInput)
    connectOrCreate?: Array<HoldingCreateOrConnectWithoutPortfolioInput>;

    @Field(() => HoldingCreateManyPortfolioInputEnvelope, {nullable:true})
    @Type(() => HoldingCreateManyPortfolioInputEnvelope)
    createMany?: HoldingCreateManyPortfolioInputEnvelope;

    @Field(() => [HoldingWhereUniqueInput], {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>>;
}
