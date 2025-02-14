import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PillarWhereUniqueInput } from './pillar-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePillarOrThrowArgs {

    @Field(() => PillarWhereUniqueInput, {nullable:false})
    @Type(() => PillarWhereUniqueInput)
    where!: Prisma.AtLeast<PillarWhereUniqueInput, 'id'>;
}
