import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThemeCreateWithoutProcessInput } from './theme-create-without-process.input';
import { Type } from 'class-transformer';
import { ThemeCreateOrConnectWithoutProcessInput } from './theme-create-or-connect-without-process.input';
import { ThemeCreateManyProcessInputEnvelope } from './theme-create-many-process-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ThemeWhereUniqueInput } from './theme-where-unique.input';

@InputType()
export class ThemeCreateNestedManyWithoutProcessInput {

    @Field(() => [ThemeCreateWithoutProcessInput], {nullable:true})
    @Type(() => ThemeCreateWithoutProcessInput)
    create?: Array<ThemeCreateWithoutProcessInput>;

    @Field(() => [ThemeCreateOrConnectWithoutProcessInput], {nullable:true})
    @Type(() => ThemeCreateOrConnectWithoutProcessInput)
    connectOrCreate?: Array<ThemeCreateOrConnectWithoutProcessInput>;

    @Field(() => ThemeCreateManyProcessInputEnvelope, {nullable:true})
    @Type(() => ThemeCreateManyProcessInputEnvelope)
    createMany?: ThemeCreateManyProcessInputEnvelope;

    @Field(() => [ThemeWhereUniqueInput], {nullable:true})
    @Type(() => ThemeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>>;
}
