import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateWithoutClientInput } from './defined-branding-project-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateOrConnectWithoutClientInput } from './defined-branding-project-create-or-connect-without-client.input';
import { DefinedBrandingProjectUpsertWithWhereUniqueWithoutClientInput } from './defined-branding-project-upsert-with-where-unique-without-client.input';
import { DefinedBrandingProjectCreateManyClientInputEnvelope } from './defined-branding-project-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { DefinedBrandingProjectUpdateWithWhereUniqueWithoutClientInput } from './defined-branding-project-update-with-where-unique-without-client.input';
import { DefinedBrandingProjectUpdateManyWithWhereWithoutClientInput } from './defined-branding-project-update-many-with-where-without-client.input';
import { DefinedBrandingProjectScalarWhereInput } from './defined-branding-project-scalar-where.input';

@InputType()
export class DefinedBrandingProjectUpdateManyWithoutClientNestedInput {

    @Field(() => [DefinedBrandingProjectCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedBrandingProjectCreateWithoutClientInput)
    create?: Array<DefinedBrandingProjectCreateWithoutClientInput>;

    @Field(() => [DefinedBrandingProjectCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedBrandingProjectCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedBrandingProjectCreateOrConnectWithoutClientInput>;

    @Field(() => [DefinedBrandingProjectUpsertWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedBrandingProjectUpsertWithWhereUniqueWithoutClientInput)
    upsert?: Array<DefinedBrandingProjectUpsertWithWhereUniqueWithoutClientInput>;

    @Field(() => DefinedBrandingProjectCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedBrandingProjectCreateManyClientInputEnvelope)
    createMany?: DefinedBrandingProjectCreateManyClientInputEnvelope;

    @Field(() => [DefinedBrandingProjectWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [DefinedBrandingProjectWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [DefinedBrandingProjectWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [DefinedBrandingProjectWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [DefinedBrandingProjectUpdateWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => DefinedBrandingProjectUpdateWithWhereUniqueWithoutClientInput)
    update?: Array<DefinedBrandingProjectUpdateWithWhereUniqueWithoutClientInput>;

    @Field(() => [DefinedBrandingProjectUpdateManyWithWhereWithoutClientInput], {nullable:true})
    @Type(() => DefinedBrandingProjectUpdateManyWithWhereWithoutClientInput)
    updateMany?: Array<DefinedBrandingProjectUpdateManyWithWhereWithoutClientInput>;

    @Field(() => [DefinedBrandingProjectScalarWhereInput], {nullable:true})
    @Type(() => DefinedBrandingProjectScalarWhereInput)
    deleteMany?: Array<DefinedBrandingProjectScalarWhereInput>;
}
