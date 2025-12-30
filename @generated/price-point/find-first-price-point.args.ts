import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PricePointWhereInput } from './price-point-where.input';
import { Type } from 'class-transformer';
import { PricePointOrderByWithRelationInput } from './price-point-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PricePointWhereUniqueInput } from './price-point-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PricePointScalarFieldEnum } from './price-point-scalar-field.enum';

@ArgsType()
export class FindFirstPricePointArgs {

    @Field(() => PricePointWhereInput, {nullable:true})
    @Type(() => PricePointWhereInput)
    where?: PricePointWhereInput;

    @Field(() => [PricePointOrderByWithRelationInput], {nullable:true})
    @Type(() => PricePointOrderByWithRelationInput)
    orderBy?: Array<PricePointOrderByWithRelationInput>;

    @Field(() => PricePointWhereUniqueInput, {nullable:true})
    @Type(() => PricePointWhereUniqueInput)
    cursor?: Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PricePointScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PricePointScalarFieldEnum>;
}
