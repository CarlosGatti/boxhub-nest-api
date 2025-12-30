import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HoldingCreateManyAssetInput } from './holding-create-many-asset.input';
import { Type } from 'class-transformer';

@InputType()
export class HoldingCreateManyAssetInputEnvelope {

    @Field(() => [HoldingCreateManyAssetInput], {nullable:false})
    @Type(() => HoldingCreateManyAssetInput)
    data!: Array<HoldingCreateManyAssetInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
