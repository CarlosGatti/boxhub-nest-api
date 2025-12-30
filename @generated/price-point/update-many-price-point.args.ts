import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PricePointUpdateManyMutationInput } from './price-point-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PricePointWhereInput } from './price-point-where.input';

@ArgsType()
export class UpdateManyPricePointArgs {

    @Field(() => PricePointUpdateManyMutationInput, {nullable:false})
    @Type(() => PricePointUpdateManyMutationInput)
    data!: PricePointUpdateManyMutationInput;

    @Field(() => PricePointWhereInput, {nullable:true})
    @Type(() => PricePointWhereInput)
    where?: PricePointWhereInput;
}
