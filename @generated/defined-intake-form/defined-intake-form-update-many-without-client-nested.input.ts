import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormCreateWithoutClientInput } from './defined-intake-form-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedIntakeFormCreateOrConnectWithoutClientInput } from './defined-intake-form-create-or-connect-without-client.input';
import { DefinedIntakeFormUpsertWithWhereUniqueWithoutClientInput } from './defined-intake-form-upsert-with-where-unique-without-client.input';
import { DefinedIntakeFormCreateManyClientInputEnvelope } from './defined-intake-form-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedIntakeFormWhereUniqueInput } from './defined-intake-form-where-unique.input';
import { DefinedIntakeFormUpdateWithWhereUniqueWithoutClientInput } from './defined-intake-form-update-with-where-unique-without-client.input';
import { DefinedIntakeFormUpdateManyWithWhereWithoutClientInput } from './defined-intake-form-update-many-with-where-without-client.input';
import { DefinedIntakeFormScalarWhereInput } from './defined-intake-form-scalar-where.input';

@InputType()
export class DefinedIntakeFormUpdateManyWithoutClientNestedInput {

    @Field(() => [DefinedIntakeFormCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedIntakeFormCreateWithoutClientInput)
    create?: Array<DefinedIntakeFormCreateWithoutClientInput>;

    @Field(() => [DefinedIntakeFormCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedIntakeFormCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedIntakeFormCreateOrConnectWithoutClientInput>;

    @Field(() => [DefinedIntakeFormUpsertWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedIntakeFormUpsertWithWhereUniqueWithoutClientInput)
    upsert?: Array<DefinedIntakeFormUpsertWithWhereUniqueWithoutClientInput>;

    @Field(() => DefinedIntakeFormCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedIntakeFormCreateManyClientInputEnvelope)
    createMany?: DefinedIntakeFormCreateManyClientInputEnvelope;

    @Field(() => [DefinedIntakeFormWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedIntakeFormWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedIntakeFormWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedIntakeFormWhereUniqueInput], {nullable:true})
    @Type(() => DefinedIntakeFormWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedIntakeFormWhereUniqueInput, 'id' | 'shareToken'>>;

    @Field(() => [DefinedIntakeFormUpdateWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedIntakeFormUpdateWithWhereUniqueWithoutClientInput)
    update?: Array<DefinedIntakeFormUpdateWithWhereUniqueWithoutClientInput>;

    @Field(() => [DefinedIntakeFormUpdateManyWithWhereWithoutClientInput], {nullable:true})
    @Type(() => DefinedIntakeFormUpdateManyWithWhereWithoutClientInput)
    updateMany?: Array<DefinedIntakeFormUpdateManyWithWhereWithoutClientInput>;

    @Field(() => [DefinedIntakeFormScalarWhereInput], {nullable:true})
    @Type(() => DefinedIntakeFormScalarWhereInput)
    deleteMany?: Array<DefinedIntakeFormScalarWhereInput>;
}
