import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';
import { Type } from 'class-transformer';
import { HoldingCreateInput } from './holding-create.input';
import { HoldingUpdateInput } from './holding-update.input';

@ArgsType()
export class UpsertOneHoldingArgs {

    @Field(() => HoldingWhereUniqueInput, {nullable:false})
    @Type(() => HoldingWhereUniqueInput)
    where!: Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>;

    @Field(() => HoldingCreateInput, {nullable:false})
    @Type(() => HoldingCreateInput)
    create!: HoldingCreateInput;

    @Field(() => HoldingUpdateInput, {nullable:false})
    @Type(() => HoldingUpdateInput)
    update!: HoldingUpdateInput;
}
