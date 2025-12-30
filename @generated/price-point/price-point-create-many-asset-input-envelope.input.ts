import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PricePointCreateManyAssetInput } from './price-point-create-many-asset.input';
import { Type } from 'class-transformer';

@InputType()
export class PricePointCreateManyAssetInputEnvelope {

    @Field(() => [PricePointCreateManyAssetInput], {nullable:false})
    @Type(() => PricePointCreateManyAssetInput)
    data!: Array<PricePointCreateManyAssetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
