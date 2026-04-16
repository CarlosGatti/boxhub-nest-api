import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedInternalNoteCreateWithoutAuthorInput } from './defined-internal-note-create-without-author.input';
import { Type } from 'class-transformer';
import { DefinedInternalNoteCreateOrConnectWithoutAuthorInput } from './defined-internal-note-create-or-connect-without-author.input';
import { DefinedInternalNoteUpsertWithWhereUniqueWithoutAuthorInput } from './defined-internal-note-upsert-with-where-unique-without-author.input';
import { DefinedInternalNoteCreateManyAuthorInputEnvelope } from './defined-internal-note-create-many-author-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedInternalNoteWhereUniqueInput } from './defined-internal-note-where-unique.input';
import { DefinedInternalNoteUpdateWithWhereUniqueWithoutAuthorInput } from './defined-internal-note-update-with-where-unique-without-author.input';
import { DefinedInternalNoteUpdateManyWithWhereWithoutAuthorInput } from './defined-internal-note-update-many-with-where-without-author.input';
import { DefinedInternalNoteScalarWhereInput } from './defined-internal-note-scalar-where.input';

@InputType()
export class DefinedInternalNoteUpdateManyWithoutAuthorNestedInput {

    @Field(() => [DefinedInternalNoteCreateWithoutAuthorInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateWithoutAuthorInput)
    create?: Array<DefinedInternalNoteCreateWithoutAuthorInput>;

    @Field(() => [DefinedInternalNoteCreateOrConnectWithoutAuthorInput], {nullable:true})
    @Type(() => DefinedInternalNoteCreateOrConnectWithoutAuthorInput)
    connectOrCreate?: Array<DefinedInternalNoteCreateOrConnectWithoutAuthorInput>;

    @Field(() => [DefinedInternalNoteUpsertWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => DefinedInternalNoteUpsertWithWhereUniqueWithoutAuthorInput)
    upsert?: Array<DefinedInternalNoteUpsertWithWhereUniqueWithoutAuthorInput>;

    @Field(() => DefinedInternalNoteCreateManyAuthorInputEnvelope, {nullable:true})
    @Type(() => DefinedInternalNoteCreateManyAuthorInputEnvelope)
    createMany?: DefinedInternalNoteCreateManyAuthorInputEnvelope;

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

    @Field(() => [DefinedInternalNoteUpdateWithWhereUniqueWithoutAuthorInput], {nullable:true})
    @Type(() => DefinedInternalNoteUpdateWithWhereUniqueWithoutAuthorInput)
    update?: Array<DefinedInternalNoteUpdateWithWhereUniqueWithoutAuthorInput>;

    @Field(() => [DefinedInternalNoteUpdateManyWithWhereWithoutAuthorInput], {nullable:true})
    @Type(() => DefinedInternalNoteUpdateManyWithWhereWithoutAuthorInput)
    updateMany?: Array<DefinedInternalNoteUpdateManyWithWhereWithoutAuthorInput>;

    @Field(() => [DefinedInternalNoteScalarWhereInput], {nullable:true})
    @Type(() => DefinedInternalNoteScalarWhereInput)
    deleteMany?: Array<DefinedInternalNoteScalarWhereInput>;
}
