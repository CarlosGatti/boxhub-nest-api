import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateWithoutProjectInput } from './defined-branding-project-create-without-project.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateOrConnectWithoutProjectInput } from './defined-branding-project-create-or-connect-without-project.input';
import { DefinedBrandingProjectUpsertWithWhereUniqueWithoutProjectInput } from './defined-branding-project-upsert-with-where-unique-without-project.input';
import { DefinedBrandingProjectCreateManyProjectInputEnvelope } from './defined-branding-project-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { DefinedBrandingProjectUpdateWithWhereUniqueWithoutProjectInput } from './defined-branding-project-update-with-where-unique-without-project.input';
import { DefinedBrandingProjectUpdateManyWithWhereWithoutProjectInput } from './defined-branding-project-update-many-with-where-without-project.input';
import { DefinedBrandingProjectScalarWhereInput } from './defined-branding-project-scalar-where.input';

@InputType()
export class DefinedBrandingProjectUpdateManyWithoutProjectNestedInput {

    @Field(() => [DefinedBrandingProjectCreateWithoutProjectInput], {nullable:true})
    @Type(() => DefinedBrandingProjectCreateWithoutProjectInput)
    create?: Array<DefinedBrandingProjectCreateWithoutProjectInput>;

    @Field(() => [DefinedBrandingProjectCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => DefinedBrandingProjectCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<DefinedBrandingProjectCreateOrConnectWithoutProjectInput>;

    @Field(() => [DefinedBrandingProjectUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => DefinedBrandingProjectUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<DefinedBrandingProjectUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => DefinedBrandingProjectCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => DefinedBrandingProjectCreateManyProjectInputEnvelope)
    createMany?: DefinedBrandingProjectCreateManyProjectInputEnvelope;

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

    @Field(() => [DefinedBrandingProjectUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => DefinedBrandingProjectUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<DefinedBrandingProjectUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [DefinedBrandingProjectUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => DefinedBrandingProjectUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<DefinedBrandingProjectUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [DefinedBrandingProjectScalarWhereInput], {nullable:true})
    @Type(() => DefinedBrandingProjectScalarWhereInput)
    deleteMany?: Array<DefinedBrandingProjectScalarWhereInput>;
}
