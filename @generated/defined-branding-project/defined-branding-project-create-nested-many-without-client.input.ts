import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateWithoutClientInput } from './defined-branding-project-create-without-client.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateOrConnectWithoutClientInput } from './defined-branding-project-create-or-connect-without-client.input';
import { DefinedBrandingProjectCreateManyClientInputEnvelope } from './defined-branding-project-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';

@InputType()
export class DefinedBrandingProjectCreateNestedManyWithoutClientInput {

    @Field(() => [DefinedBrandingProjectCreateWithoutClientInput], {nullable:true})
    @Type(() => DefinedBrandingProjectCreateWithoutClientInput)
    create?: Array<DefinedBrandingProjectCreateWithoutClientInput>;

    @Field(() => [DefinedBrandingProjectCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => DefinedBrandingProjectCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<DefinedBrandingProjectCreateOrConnectWithoutClientInput>;

    @Field(() => DefinedBrandingProjectCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => DefinedBrandingProjectCreateManyClientInputEnvelope)
    createMany?: DefinedBrandingProjectCreateManyClientInputEnvelope;

    @Field(() => [DefinedBrandingProjectWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>>;
}
