import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';
import { Type } from 'class-transformer';
import { HoldingCreateWithoutAssetInput } from './holding-create-without-asset.input';

@InputType()
export class HoldingCreateOrConnectWithoutAssetInput {

    @Field(() => HoldingWhereUniqueInput, {nullable:false})
    @Type(() => HoldingWhereUniqueInput)
    where!: Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>;

    @Field(() => HoldingCreateWithoutAssetInput, {nullable:false})
    @Type(() => HoldingCreateWithoutAssetInput)
    create!: HoldingCreateWithoutAssetInput;
}
