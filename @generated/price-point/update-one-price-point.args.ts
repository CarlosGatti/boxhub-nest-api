import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PricePointUpdateInput } from './price-point-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PricePointWhereUniqueInput } from './price-point-where-unique.input';

@ArgsType()
export class UpdateOnePricePointArgs {

    @Field(() => PricePointUpdateInput, {nullable:false})
    @Type(() => PricePointUpdateInput)
    data!: PricePointUpdateInput;

    @Field(() => PricePointWhereUniqueInput, {nullable:false})
    @Type(() => PricePointWhereUniqueInput)
    where!: Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>;
}
