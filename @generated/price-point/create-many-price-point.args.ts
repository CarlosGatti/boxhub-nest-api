import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PricePointCreateManyInput } from './price-point-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPricePointArgs {

    @Field(() => [PricePointCreateManyInput], {nullable:false})
    @Type(() => PricePointCreateManyInput)
    data!: Array<PricePointCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
