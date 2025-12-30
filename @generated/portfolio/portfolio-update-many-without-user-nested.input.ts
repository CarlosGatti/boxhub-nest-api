import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PortfolioCreateWithoutUserInput } from './portfolio-create-without-user.input';
import { Type } from 'class-transformer';
import { PortfolioCreateOrConnectWithoutUserInput } from './portfolio-create-or-connect-without-user.input';
import { PortfolioUpsertWithWhereUniqueWithoutUserInput } from './portfolio-upsert-with-where-unique-without-user.input';
import { PortfolioCreateManyUserInputEnvelope } from './portfolio-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';
import { PortfolioUpdateWithWhereUniqueWithoutUserInput } from './portfolio-update-with-where-unique-without-user.input';
import { PortfolioUpdateManyWithWhereWithoutUserInput } from './portfolio-update-many-with-where-without-user.input';
import { PortfolioScalarWhereInput } from './portfolio-scalar-where.input';

@InputType()
export class PortfolioUpdateManyWithoutUserNestedInput {

    @Field(() => [PortfolioCreateWithoutUserInput], {nullable:true})
    @Type(() => PortfolioCreateWithoutUserInput)
    create?: Array<PortfolioCreateWithoutUserInput>;

    @Field(() => [PortfolioCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => PortfolioCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<PortfolioCreateOrConnectWithoutUserInput>;

    @Field(() => [PortfolioUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PortfolioUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<PortfolioUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => PortfolioCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => PortfolioCreateManyUserInputEnvelope)
    createMany?: PortfolioCreateManyUserInputEnvelope;

    @Field(() => [PortfolioWhereUniqueInput], {nullable:true})
    @Type(() => PortfolioWhereUniqueInput)
    set?: Array<Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>>;

    @Field(() => [PortfolioWhereUniqueInput], {nullable:true})
    @Type(() => PortfolioWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>>;

    @Field(() => [PortfolioWhereUniqueInput], {nullable:true})
    @Type(() => PortfolioWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>>;

    @Field(() => [PortfolioWhereUniqueInput], {nullable:true})
    @Type(() => PortfolioWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>>;

    @Field(() => [PortfolioUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => PortfolioUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<PortfolioUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [PortfolioUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => PortfolioUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<PortfolioUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [PortfolioScalarWhereInput], {nullable:true})
    @Type(() => PortfolioScalarWhereInput)
    deleteMany?: Array<PortfolioScalarWhereInput>;
}
