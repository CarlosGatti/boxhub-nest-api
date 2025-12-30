import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class PricePointAssetIdAsOfCompoundUniqueInput {

    @Field(() => Int, {nullable:false})
    assetId!: number;

    @Field(() => Date, {nullable:false})
    asOf!: Date | string;
}
