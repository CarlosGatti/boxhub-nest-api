import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HoldingUpdateInput } from './holding-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { HoldingWhereUniqueInput } from './holding-where-unique.input';

@ArgsType()
export class UpdateOneHoldingArgs {

    @Field(() => HoldingUpdateInput, {nullable:false})
    @Type(() => HoldingUpdateInput)
    data!: HoldingUpdateInput;

    @Field(() => HoldingWhereUniqueInput, {nullable:false})
    @Type(() => HoldingWhereUniqueInput)
    where!: Prisma.AtLeast<HoldingWhereUniqueInput, 'id'>;
}
