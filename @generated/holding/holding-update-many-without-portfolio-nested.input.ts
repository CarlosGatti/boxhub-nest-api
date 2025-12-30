import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HoldingCreateWithoutPortfolioInput } from './holding-create-without-portfolio.input';
import { Type } from 'class-transformer';
import { HoldingCreateOrConnectWithoutPortfolioInput } from './holding-create-or-connect-without-portfolio.input';
import { HoldingUpsertWithWhereUniqueWithoutPortfolioInput } from './holding-upsert-with-where-unique-without-portfolio.input';
import { HoldingCreateManyPortfolioInputEnvelope } from './holding-create-many-portfolio-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';
import { HoldingUpdateWithWhereUniqueWithoutPortfolioInput } from './holding-update-with-where-unique-without-portfolio.input';
import { HoldingUpdateManyWithWhereWithoutPortfolioInput } from './holding-update-many-with-where-without-portfolio.input';
import { HoldingScalarWhereInput } from './holding-scalar-where.input';

@InputType()
export class HoldingUpdateManyWithoutPortfolioNestedInput {

    @Field(() => [HoldingCreateWithoutPortfolioInput], {nullable:true})
    @Type(() => HoldingCreateWithoutPortfolioInput)
    create?: Array<HoldingCreateWithoutPortfolioInput>;

    @Field(() => [HoldingCreateOrConnectWithoutPortfolioInput], {nullable:true})
    @Type(() => HoldingCreateOrConnectWithoutPortfolioInput)
    connectOrCreate?: Array<HoldingCreateOrConnectWithoutPortfolioInput>;

    @Field(() => [HoldingUpsertWithWhereUniqueWithoutPortfolioInput], {nullable:true})
    @Type(() => HoldingUpsertWithWhereUniqueWithoutPortfolioInput)
    upsert?: Array<HoldingUpsertWithWhereUniqueWithoutPortfolioInput>;

    @Field(() => HoldingCreateManyPortfolioInputEnvelope, {nullable:true})
    @Type(() => HoldingCreateManyPortfolioInputEnvelope)
    createMany?: HoldingCreateManyPortfolioInputEnvelope;

    @Field(() => [HoldingWhereUniqueInput], {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>>;

    @Field(() => [HoldingWhereUniqueInput], {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>>;

    @Field(() => [HoldingWhereUniqueInput], {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>>;

    @Field(() => [HoldingWhereUniqueInput], {nullable:true})
    @Type(() => HoldingWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>>;

    @Field(() => [HoldingUpdateWithWhereUniqueWithoutPortfolioInput], {nullable:true})
    @Type(() => HoldingUpdateWithWhereUniqueWithoutPortfolioInput)
    update?: Array<HoldingUpdateWithWhereUniqueWithoutPortfolioInput>;

    @Field(() => [HoldingUpdateManyWithWhereWithoutPortfolioInput], {nullable:true})
    @Type(() => HoldingUpdateManyWithWhereWithoutPortfolioInput)
    updateMany?: Array<HoldingUpdateManyWithWhereWithoutPortfolioInput>;

    @Field(() => [HoldingScalarWhereInput], {nullable:true})
    @Type(() => HoldingScalarWhereInput)
    deleteMany?: Array<HoldingScalarWhereInput>;
}
