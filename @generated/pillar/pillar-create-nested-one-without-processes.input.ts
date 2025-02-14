import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PillarCreateWithoutProcessesInput } from './pillar-create-without-processes.input';
import { Type } from 'class-transformer';
import { PillarCreateOrConnectWithoutProcessesInput } from './pillar-create-or-connect-without-processes.input';
import { Prisma } from '@prisma/client';
import { PillarWhereUniqueInput } from './pillar-where-unique.input';

@InputType()
export class PillarCreateNestedOneWithoutProcessesInput {

    @Field(() => PillarCreateWithoutProcessesInput, {nullable:true})
    @Type(() => PillarCreateWithoutProcessesInput)
    create?: PillarCreateWithoutProcessesInput;

    @Field(() => PillarCreateOrConnectWithoutProcessesInput, {nullable:true})
    @Type(() => PillarCreateOrConnectWithoutProcessesInput)
    connectOrCreate?: PillarCreateOrConnectWithoutProcessesInput;

    @Field(() => PillarWhereUniqueInput, {nullable:true})
    @Type(() => PillarWhereUniqueInput)
    connect?: Prisma.AtLeast<PillarWhereUniqueInput, 'id'>;
}
