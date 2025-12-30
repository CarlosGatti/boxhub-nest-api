import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetWhereInput } from './asset-where.input';
import { Type } from 'class-transformer';
import { AssetUpdateWithoutHoldingsInput } from './asset-update-without-holdings.input';

@InputType()
export class AssetUpdateToOneWithWhereWithoutHoldingsInput {

    @Field(() => AssetWhereInput, {nullable:true})
    @Type(() => AssetWhereInput)
    where?: AssetWhereInput;

    @Field(() => AssetUpdateWithoutHoldingsInput, {nullable:false})
    @Type(() => AssetUpdateWithoutHoldingsInput)
    data!: AssetUpdateWithoutHoldingsInput;
}
