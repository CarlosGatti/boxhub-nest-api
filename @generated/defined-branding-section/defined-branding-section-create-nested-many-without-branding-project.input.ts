import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingSectionCreateWithoutBrandingProjectInput } from './defined-branding-section-create-without-branding-project.input';
import { Type } from 'class-transformer';
import { DefinedBrandingSectionCreateOrConnectWithoutBrandingProjectInput } from './defined-branding-section-create-or-connect-without-branding-project.input';
import { DefinedBrandingSectionCreateManyBrandingProjectInputEnvelope } from './defined-branding-section-create-many-branding-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingSectionWhereUniqueInput } from './defined-branding-section-where-unique.input';

@InputType()
export class DefinedBrandingSectionCreateNestedManyWithoutBrandingProjectInput {

    @Field(() => [DefinedBrandingSectionCreateWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingSectionCreateWithoutBrandingProjectInput)
    create?: Array<DefinedBrandingSectionCreateWithoutBrandingProjectInput>;

    @Field(() => [DefinedBrandingSectionCreateOrConnectWithoutBrandingProjectInput], {nullable:true})
    @Type(() => DefinedBrandingSectionCreateOrConnectWithoutBrandingProjectInput)
    connectOrCreate?: Array<DefinedBrandingSectionCreateOrConnectWithoutBrandingProjectInput>;

    @Field(() => DefinedBrandingSectionCreateManyBrandingProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedBrandingSectionCreateManyBrandingProjectInputEnvelope)
    createMany?: DefinedBrandingSectionCreateManyBrandingProjectInputEnvelope;

    @Field(() => [DefinedBrandingSectionWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingSectionWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedBrandingSectionWhereUniqueInput, 'id'>>;
}
