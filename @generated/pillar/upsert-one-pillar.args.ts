import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PillarWhereUniqueInput } from './pillar-where-unique.input';
import { Type } from 'class-transformer';
import { PillarCreateInput } from './pillar-create.input';
import { PillarUpdateInput } from './pillar-update.input';

@ArgsType()
export class UpsertOnePillarArgs {

    @Field(() => PillarWhereUniqueInput, {nullable:false})
    @Type(() => PillarWhereUniqueInput)
    where!: Prisma.AtLeast<PillarWhereUniqueInput, 'id'>;

    @Field(() => PillarCreateInput, {nullable:false})
    @Type(() => PillarCreateInput)
    create!: PillarCreateInput;

    @Field(() => PillarUpdateInput, {nullable:false})
    @Type(() => PillarUpdateInput)
    update!: PillarUpdateInput;
}
