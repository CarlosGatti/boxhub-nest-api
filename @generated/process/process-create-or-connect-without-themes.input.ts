import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProcessWhereUniqueInput } from './process-where-unique.input';
import { Type } from 'class-transformer';
import { ProcessCreateWithoutThemesInput } from './process-create-without-themes.input';

@InputType()
export class ProcessCreateOrConnectWithoutThemesInput {

    @Field(() => ProcessWhereUniqueInput, {nullable:false})
    @Type(() => ProcessWhereUniqueInput)
    where!: Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>;

    @Field(() => ProcessCreateWithoutThemesInput, {nullable:false})
    @Type(() => ProcessCreateWithoutThemesInput)
    create!: ProcessCreateWithoutThemesInput;
}
