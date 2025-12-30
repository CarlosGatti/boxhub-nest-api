import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';
import { Type } from 'class-transformer';
import { PortfolioUpdateWithoutUserInput } from './portfolio-update-without-user.input';
import { PortfolioCreateWithoutUserInput } from './portfolio-create-without-user.input';

@InputType()
export class PortfolioUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => PortfolioWhereUniqueInput, {nullable:false})
    @Type(() => PortfolioWhereUniqueInput)
    where!: Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>;

    @Field(() => PortfolioUpdateWithoutUserInput, {nullable:false})
    @Type(() => PortfolioUpdateWithoutUserInput)
    update!: PortfolioUpdateWithoutUserInput;

    @Field(() => PortfolioCreateWithoutUserInput, {nullable:false})
    @Type(() => PortfolioCreateWithoutUserInput)
    create!: PortfolioCreateWithoutUserInput;
}
