import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PricePointScalarWhereInput } from './price-point-scalar-where.input';
import { Type } from 'class-transformer';
import { PricePointUpdateManyMutationInput } from './price-point-update-many-mutation.input';

@InputType()
export class PricePointUpdateManyWithWhereWithoutAssetInput {

    @Field(() => PricePointScalarWhereInput, {nullable:false})
    @Type(() => PricePointScalarWhereInput)
    where!: PricePointScalarWhereInput;

    @Field(() => PricePointUpdateManyMutationInput, {nullable:false})
    @Type(() => PricePointUpdateManyMutationInput)
    data!: PricePointUpdateManyMutationInput;
}
