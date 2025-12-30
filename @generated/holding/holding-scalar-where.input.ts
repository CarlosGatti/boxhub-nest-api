import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { IntFilter } from '../prisma/int-filter.input';
import { DecimalFilter } from '../prisma/decimal-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class HoldingScalarWhereInput {

    @Field(() => [HoldingScalarWhereInput], {nullable:true})
    @Type(() => HoldingScalarWhereInput)
    AND?: Array<HoldingScalarWhereInput>;

    @Field(() => [HoldingScalarWhereInput], {nullable:true})
    @Type(() => HoldingScalarWhereInput)
    OR?: Array<HoldingScalarWhereInput>;

    @Field(() => [HoldingScalarWhereInput], {nullable:true})
    @Type(() => HoldingScalarWhereInput)
    NOT?: Array<HoldingScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    portfolioId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    assetId?: IntFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    quantity?: DecimalFilter;

    @Field(() => DecimalFilter, {nullable:true})
    @Type(() => DecimalFilter)
    averageCost?: DecimalFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    notes?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
