import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PortfolioWhereInput } from './portfolio-where.input';
import { Type } from 'class-transformer';
import { PortfolioOrderByWithRelationInput } from './portfolio-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PortfolioWhereUniqueInput } from './portfolio-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PortfolioScalarFieldEnum } from './portfolio-scalar-field.enum';

@ArgsType()
export class FindFirstPortfolioOrThrowArgs {

    @Field(() => PortfolioWhereInput, {nullable:true})
    @Type(() => PortfolioWhereInput)
    where?: PortfolioWhereInput;

    @Field(() => [PortfolioOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PortfolioOrderByWithRelationInput>;

    @Field(() => PortfolioWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PortfolioWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PortfolioScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PortfolioScalarFieldEnum>;
}
