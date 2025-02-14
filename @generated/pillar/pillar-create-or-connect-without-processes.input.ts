import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PillarWhereUniqueInput } from './pillar-where-unique.input';
import { Type } from 'class-transformer';
import { PillarCreateWithoutProcessesInput } from './pillar-create-without-processes.input';

@InputType()
export class PillarCreateOrConnectWithoutProcessesInput {

    @Field(() => PillarWhereUniqueInput, {nullable:false})
    @Type(() => PillarWhereUniqueInput)
    where!: Prisma.AtLeast<PillarWhereUniqueInput, 'id'>;

    @Field(() => PillarCreateWithoutProcessesInput, {nullable:false})
    @Type(() => PillarCreateWithoutProcessesInput)
    create!: PillarCreateWithoutProcessesInput;
}
