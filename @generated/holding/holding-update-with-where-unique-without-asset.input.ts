import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';
import { Type } from 'class-transformer';
import { HoldingUpdateWithoutAssetInput } from './holding-update-without-asset.input';

@InputType()
export class HoldingUpdateWithWhereUniqueWithoutAssetInput {

    @Field(() => HoldingWhereUniqueInput, {nullable:false})
    @Type(() => HoldingWhereUniqueInput)
    where!: Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>;

    @Field(() => HoldingUpdateWithoutAssetInput, {nullable:false})
    @Type(() => HoldingUpdateWithoutAssetInput)
    data!: HoldingUpdateWithoutAssetInput;
}
