import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePortfolioArgs {

    @Field(() => PortfolioWhereUniqueInput, {nullable:false})
    @Type(() => PortfolioWhereUniqueInput)
    where!: Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>;
}
