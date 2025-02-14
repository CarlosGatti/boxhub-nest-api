import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PillarUpdateInput } from './pillar-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { PillarWhereUniqueInput } from './pillar-where-unique.input';

@ArgsType()
export class UpdateOnePillarArgs {

    @Field(() => PillarUpdateInput, {nullable:false})
    @Type(() => PillarUpdateInput)
    data!: PillarUpdateInput;

    @Field(() => PillarWhereUniqueInput, {nullable:false})
    @Type(() => PillarWhereUniqueInput)
    where!: Prisma.AtLeast<PillarWhereUniqueInput, 'id'>;
}
