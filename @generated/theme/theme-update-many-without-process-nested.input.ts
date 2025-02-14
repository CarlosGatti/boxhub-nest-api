import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThemeCreateWithoutProcessInput } from './theme-create-without-process.input';
import { Type } from 'class-transformer';
import { ThemeCreateOrConnectWithoutProcessInput } from './theme-create-or-connect-without-process.input';
import { ThemeUpsertWithWhereUniqueWithoutProcessInput } from './theme-upsert-with-where-unique-without-process.input';
import { ThemeCreateManyProcessInputEnvelope } from './theme-create-many-process-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ThemeWhereUniqueInput } from './theme-where-unique.input';
import { ThemeUpdateWithWhereUniqueWithoutProcessInput } from './theme-update-with-where-unique-without-process.input';
import { ThemeUpdateManyWithWhereWithoutProcessInput } from './theme-update-many-with-where-without-process.input';
import { ThemeScalarWhereInput } from './theme-scalar-where.input';

@InputType()
export class ThemeUpdateManyWithoutProcessNestedInput {

    @Field(() => [ThemeCreateWithoutProcessInput], {nullable:true})
    @Type(() => ThemeCreateWithoutProcessInput)
    create?: Array<ThemeCreateWithoutProcessInput>;

    @Field(() => [ThemeCreateOrConnectWithoutProcessInput], {nullable:true})
    @Type(() => ThemeCreateOrConnectWithoutProcessInput)
    connectOrCreate?: Array<ThemeCreateOrConnectWithoutProcessInput>;

    @Field(() => [ThemeUpsertWithWhereUniqueWithoutProcessInput], {nullable:true})
    @Type(() => ThemeUpsertWithWhereUniqueWithoutProcessInput)
    upsert?: Array<ThemeUpsertWithWhereUniqueWithoutProcessInput>;

    @Field(() => ThemeCreateManyProcessInputEnvelope, {nullable:true})
    @Type(() => ThemeCreateManyProcessInputEnvelope)
    createMany?: ThemeCreateManyProcessInputEnvelope;

    @Field(() => [ThemeWhereUniqueInput], {nullable:true})
    @Type(() => ThemeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>>;

    @Field(() => [ThemeWhereUniqueInput], {nullable:true})
    @Type(() => ThemeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>>;

    @Field(() => [ThemeWhereUniqueInput], {nullable:true})
    @Type(() => ThemeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>>;

    @Field(() => [ThemeWhereUniqueInput], {nullable:true})
    @Type(() => ThemeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ThemeWhereUniqueInput, 'id'>>;

    @Field(() => [ThemeUpdateWithWhereUniqueWithoutProcessInput], {nullable:true})
    @Type(() => ThemeUpdateWithWhereUniqueWithoutProcessInput)
    update?: Array<ThemeUpdateWithWhereUniqueWithoutProcessInput>;

    @Field(() => [ThemeUpdateManyWithWhereWithoutProcessInput], {nullable:true})
    @Type(() => ThemeUpdateManyWithWhereWithoutProcessInput)
    updateMany?: Array<ThemeUpdateManyWithWhereWithoutProcessInput>;

    @Field(() => [ThemeScalarWhereInput], {nullable:true})
    @Type(() => ThemeScalarWhereInput)
    deleteMany?: Array<ThemeScalarWhereInput>;
}
