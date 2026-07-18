import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutCreatedByInput } from './defined-academy-resource-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutCreatedByInput } from './defined-academy-resource-create-or-connect-without-created-by.input';
import { DefinedAcademyResourceUpsertWithWhereUniqueWithoutCreatedByInput } from './defined-academy-resource-upsert-with-where-unique-without-created-by.input';
import { DefinedAcademyResourceCreateManyCreatedByInputEnvelope } from './defined-academy-resource-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { DefinedAcademyResourceUpdateWithWhereUniqueWithoutCreatedByInput } from './defined-academy-resource-update-with-where-unique-without-created-by.input';
import { DefinedAcademyResourceUpdateManyWithWhereWithoutCreatedByInput } from './defined-academy-resource-update-many-with-where-without-created-by.input';
import { DefinedAcademyResourceScalarWhereInput } from './defined-academy-resource-scalar-where.input';

@InputType()
export class DefinedAcademyResourceUpdateManyWithoutCreatedByNestedInput {

    @Field(() => [DefinedAcademyResourceCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutCreatedByInput)
    create?: Array<DefinedAcademyResourceCreateWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyResourceCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DefinedAcademyResourceCreateOrConnectWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyResourceUpsertWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyResourceUpsertWithWhereUniqueWithoutCreatedByInput)
    upsert?: Array<DefinedAcademyResourceUpsertWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => DefinedAcademyResourceCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateManyCreatedByInputEnvelope)
    createMany?: DefinedAcademyResourceCreateManyCreatedByInputEnvelope;

    @Field(() => [DefinedAcademyResourceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyResourceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyResourceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyResourceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyResourceUpdateWithWhereUniqueWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyResourceUpdateWithWhereUniqueWithoutCreatedByInput)
    update?: Array<DefinedAcademyResourceUpdateWithWhereUniqueWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyResourceUpdateManyWithWhereWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyResourceUpdateManyWithWhereWithoutCreatedByInput)
    updateMany?: Array<DefinedAcademyResourceUpdateManyWithWhereWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyResourceScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyResourceScalarWhereInput)
    deleteMany?: Array<DefinedAcademyResourceScalarWhereInput>;
}
