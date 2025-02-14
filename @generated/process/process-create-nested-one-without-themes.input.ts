import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProcessCreateWithoutThemesInput } from './process-create-without-themes.input';
import { Type } from 'class-transformer';
import { ProcessCreateOrConnectWithoutThemesInput } from './process-create-or-connect-without-themes.input';
import { Prisma } from '@prisma/client';
import { ProcessWhereUniqueInput } from './process-where-unique.input';

@InputType()
export class ProcessCreateNestedOneWithoutThemesInput {

    @Field(() => ProcessCreateWithoutThemesInput, {nullable:true})
    @Type(() => ProcessCreateWithoutThemesInput)
    create?: ProcessCreateWithoutThemesInput;

    @Field(() => ProcessCreateOrConnectWithoutThemesInput, {nullable:true})
    @Type(() => ProcessCreateOrConnectWithoutThemesInput)
    connectOrCreate?: ProcessCreateOrConnectWithoutThemesInput;

    @Field(() => ProcessWhereUniqueInput, {nullable:true})
    @Type(() => ProcessWhereUniqueInput)
    connect?: Prisma.AtLeast<ProcessWhereUniqueInput, 'id'>;
}
