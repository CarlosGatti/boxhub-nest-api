import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingSectionCreateWithoutBrandingProjectInput } from './defined-branding-section-create-without-branding-project.input';
import { Type } from 'class-transformer';
import { DefinedBrandingSectionCreateOrConnectWithoutBrandingProjectInput } from './defined-branding-section-create-or-connect-without-branding-project.input';
import { DefinedBrandingSectionUpsertWithWhereUniqueWithoutBrandingProjectInput } from './defined-branding-section-upsert-with-where-unique-without-branding-project.input';
import { DefinedBrandingSectionCreateManyBrandingProjectInputEnvelope } from './defined-branding-section-create-many-branding-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingSectionWhereUniqueInput } from './defined-branding-section-where-unique.input';
import { DefinedBrandingSectionUpdateWithWhereUniqueWithoutBrandingProjectInput } from './defined-branding-section-update-with-where-unique-without-branding-project.input';
import { DefinedBrandingSectionUpdateManyWithWhereWithoutBrandingProjectInput } from './defined-branding-section-update-many-with-where-without-branding-project.input';
import { DefinedBrandingSectionScalarWhereInput } from './defined-branding-section-scalar-where.input';

@InputType()
export class DefinedBrandingSectionUncheckedUpdateManyWithoutBrandingProjectNestedInput {

    @Field(() => [DefinedBrandingSectionCreateWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingSectionCreateWithoutBrandingProjectInput)
    create?: Array<DefinedBrandingSectionCreateWithoutBrandingProjectInput>;

    @Field(() => [DefinedBrandingSectionCreateOrConnectWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingSectionCreateOrConnectWithoutBrandingProjectInput)
    connectOrCreate?: Array<DefinedBrandingSectionCreateOrConnectWithoutBrandingProjectInput>;

    @Field(() => [DefinedBrandingSectionUpsertWithWhereUniqueWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingSectionUpsertWithWhereUniqueWithoutBrandingProjectInput)
    upsert?: Array<DefinedBrandingSectionUpsertWithWhereUniqueWithoutBrandingProjectInput>;

    @Field(() => DefinedBrandingSectionCreateManyBrandingProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedBrandingSectionCreateManyBrandingProjectInputEnvelope)
    createMany?: DefinedBrandingSectionCreateManyBrandingProjectInputEnvelope;

    @Field(() => [DefinedBrandingSectionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingSectionWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedBrandingSectionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedBrandingSectionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingSectionWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedBrandingSectionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedBrandingSectionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingSectionWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedBrandingSectionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedBrandingSectionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingSectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedBrandingSectionWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedBrandingSectionUpdateWithWhereUniqueWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingSectionUpdateWithWhereUniqueWithoutBrandingProjectInput)
    update?: Array<DefinedBrandingSectionUpdateWithWhereUniqueWithoutBrandingProjectInput>;

    @Field(() => [DefinedBrandingSectionUpdateManyWithWhereWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingSectionUpdateManyWithWhereWithoutBrandingProjectInput)
    updateMany?: Array<DefinedBrandingSectionUpdateManyWithWhereWithoutBrandingProjectInput>;

    @Field(() => [DefinedBrandingSectionScalarWhereInput], {nullable:true})
    @Type(() => DefinedBrandingSectionScalarWhereInput)
    deleteMany?: Array<DefinedBrandingSectionScalarWhereInput>;
}
