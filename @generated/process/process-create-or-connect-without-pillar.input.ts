import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProcessWhereUniqueInput } from './process-where-unique.input';
import { Type } from 'class-transformer';
import { ProcessCreateWithoutPillarInput } from './process-create-without-pillar.input';

@InputType()
export class ProcessCreateOrConnectWithoutPillarInput {

    @Field(() => ProcessWhereUniqueInput, {nullable:false})
    @Type(() => ProcessWhereUniqueInput)
    where!: Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>;

    @Field(() => ProcessCreateWithoutPillarInput, {nullable:false})
    @Type(() => ProcessCreateWithoutPillarInput)
    create!: ProcessCreateWithoutPillarInput;
}
