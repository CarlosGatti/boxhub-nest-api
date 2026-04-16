import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInternalNoteCreateWithoutProjectInput } from './defined-internal-note-create-without-project.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteCreateOrConnectWithoutProjectInput } from './defined-internal-note-create-or-connect-without-project.input';
import { DefinedInternalNoteUpsertWithWhereUniqueWithoutProjectInput } from './defined-internal-note-upsert-with-where-unique-without-project.input';
import { DefinedInternalNoteCreateManyProjectInputEnvelope } from './defined-internal-note-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';
import { DefinedInternalNoteUpdateWithWhereUniqueWithoutProjectInput } from './defined-internal-note-update-with-where-unique-without-project.input';
import { DefinedInternalNoteUpdateManyWithWhereWithoutProjectInput } from './defined-internal-note-update-many-with-where-without-project.input';
import { DefinedInternalNoteScalarWhereInput } from './defined-internal-note-scalar-where.input';

@InputType()
export class DefinedInternalNoteUncheckedUpdateManyWithoutProjectNestedInput {

    @Field(() => [DefinedInternalNoteCreateWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateWithoutProjectInput)
    create?: Array<DefinedInternalNoteCreateWithoutProjectInput>;

    @Field(() => [DefinedInternalNoteCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<DefinedInternalNoteCreateOrConnectWithoutProjectInput>;

    @Field(() => [DefinedInternalNoteUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInternalNoteUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<DefinedInternalNoteUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => DefinedInternalNoteCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedInternalNoteCreateManyProjectInputEnvelope)
    createMany?: DefinedInternalNoteCreateManyProjectInputEnvelope;

    @Field(() => [DefinedInternalNoteWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInternalNoteWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInternalNoteWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInternalNoteWhereUniqueInput], {nullable:true})
    @Type(() => DefinedInternalNoteWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedInternalNoteWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedInternalNoteUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInternalNoteUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<DefinedInternalNoteUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [DefinedInternalNoteUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => DefinedInternalNoteUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<DefinedInternalNoteUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [DefinedInternalNoteScalarWhereInput], {nullable:true})
    @Type(() => DefinedInternalNoteScalarWhereInput)
    deleteMany?: Array<DefinedInternalNoteScalarWhereInput>;
}
