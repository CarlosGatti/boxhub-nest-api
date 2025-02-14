import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProcessWhereUniqueInput } from './process-where-unique.input';
import { Type } from 'class-transformer';
import { ProcessUpdateWithoutPillarInput } from './process-update-without-pillar.input';

@InputType()
export class ProcessUpdateWithWhereUniqueWithoutPillarInput {

    @Field(() => ProcessWhereUniqueInput, {nullable:false})
    @Type(() => ProcessWhereUniqueInput)
    where!: Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>;

    @Field(() => ProcessUpdateWithoutPillarInput, {nullable:false})
    @Type(() => ProcessUpdateWithoutPillarInput)
    data!: ProcessUpdateWithoutPillarInput;
}
