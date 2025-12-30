import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioCreateWithoutUserInput } from './portfolio-create-without-user.input';
import { Type } from 'class-transformer';
import { PortfolioCreateOrConnectWithoutUserInput } from './portfolio-create-or-connect-without-user.input';
import { PortfolioCreateManyUserInputEnvelope } from './portfolio-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';

@InputType()
export class PortfolioCreateNestedManyWithoutUserInput {

    @Field(() => [PortfolioCreateWithoutUserInput], {nullable:true})
    @Type(() => PortfolioCreateWithoutUserInput)
    create?: Array<PortfolioCreateWithoutUserInput>;

    @Field(() => [PortfolioCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PortfolioCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PortfolioCreateOrConnectWithoutUserInput>;

    @Field(() => PortfolioCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PortfolioCreateManyUserInputEnvelope)
    createMany?: PortfolioCreateManyUserInputEnvelope;

    @Field(() => [PortfolioWhereUniqueInput], {nullable:true})
    @Type(() => PortfolioWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>>;
}
