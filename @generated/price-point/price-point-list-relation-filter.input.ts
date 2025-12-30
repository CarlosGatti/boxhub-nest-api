import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PricePointWhereInput } from './price-point-where.input';
import { Type } from 'class-transformer';

@InputType()
export class PricePointListRelationFilter {

    @Field(() => PricePointWhereInput, {nullable:true})
    @Type(() => PricePointWhereInput)
    every?: PricePointWhereInput;

    @Field(() => PricePointWhereInput, {nullable:true})
    @Type(() => PricePointWhereInput)
    some?: PricePointWhereInput;

    @Field(() => PricePointWhereInput, {nullable:true})
    @Type(() => PricePointWhereInput)
    none?: PricePointWhereInput;
}
