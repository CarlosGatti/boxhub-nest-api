import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PricePointCreateInput } from './price-point-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePricePointArgs {

    @Field(() => PricePointCreateInput, {nullable:false})
    @Type(() => PricePointCreateInput)
    data!: PricePointCreateInput;
}
