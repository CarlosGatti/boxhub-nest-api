import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PricePointWhereUniqueInput } from './price-point-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePricePointArgs {

    @Field(() => PricePointWhereUniqueInput, {nullable:false})
    @Type(() => PricePointWhereUniqueInput)
    where!: Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>;
}
