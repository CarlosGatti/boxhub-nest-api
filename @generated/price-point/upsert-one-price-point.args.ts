import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PricePointWhereUniqueInput } from './price-point-where-unique.input';
import { Type } from 'class-transformer';
import { PricePointCreateInput } from './price-point-create.input';
import { PricePointUpdateInput } from './price-point-update.input';

@ArgsType()
export class UpsertOnePricePointArgs {

    @Field(() => PricePointWhereUniqueInput, {nullable:false})
    @Type(() => PricePointWhereUniqueInput)
    where!: Prisma.AtLeast<PricePointWhereUniqueInput, 'id' | 'assetId_asOf'>;

    @Field(() => PricePointCreateInput, {nullable:false})
    @Type(() => PricePointCreateInput)
    create!: PricePointCreateInput;

    @Field(() => PricePointUpdateInput, {nullable:false})
    @Type(() => PricePointUpdateInput)
    update!: PricePointUpdateInput;
}
