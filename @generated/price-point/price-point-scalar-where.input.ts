import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PricePointScalarWhereInput {

    @Field(() => [PricePointScalarWhereInput], {nullable:true})
    @Type(() => PricePointScalarWhereInput)
    AND?: Array<PricePointScalarWhereInput>;

    @Field(() => [PricePointScalarWhereInput], {nullable:true})
    @Type(() => PricePointScalarWhereInput)
    OR?: Array<PricePointScalarWhereInput>;

    @Field(() => [PricePointScalarWhereInput], {nullable:true})
    @Type(() => PricePointScalarWhereInput)
    NOT?: Array<PricePointScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    assetId?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    price?: DecimalFilter;

    @Field(() => StringFilter, {nullable:true})
    currency?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    asOf?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    source?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
