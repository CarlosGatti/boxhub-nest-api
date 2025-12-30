import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PricePointWhereInput } from './price-point-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPricePointArgs {

    @Field(() => PricePointWhereInput, {nullable:true})
    @Type(() => PricePointWhereInput)
    where?: PricePointWhereInput;
}
