import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateWithoutProjectInput } from './defined-branding-project-create-without-project.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateOrConnectWithoutProjectInput } from './defined-branding-project-create-or-connect-without-project.input';
import { DefinedBrandingProjectCreateManyProjectInputEnvelope } from './defined-branding-project-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';

@InputType()
export class DefinedBrandingProjectUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [DefinedBrandingProjectCreateWithoutProjectInput], {nullable:true})
    @Type(() => DefinedBrandingProjectCreateWithoutProjectInput)
    create?: Array<DefinedBrandingProjectCreateWithoutProjectInput>;

    @Field(() => [DefinedBrandingProjectCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => DefinedBrandingProjectCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<DefinedBrandingProjectCreateOrConnectWithoutProjectInput>;

    @Field(() => DefinedBrandingProjectCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedBrandingProjectCreateManyProjectInputEnvelope)
    createMany?: DefinedBrandingProjectCreateManyProjectInputEnvelope;

    @Field(() => [DefinedBrandingProjectWhereUniqueInput], {nullable:true})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>>;
}
