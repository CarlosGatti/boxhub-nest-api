import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutBrandingProjectsInput } from './defined-project-create-without-branding-projects.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutBrandingProjectsInput } from './defined-project-create-or-connect-without-branding-projects.input';
import { DefinedProjectUpsertWithoutBrandingProjectsInput } from './defined-project-upsert-without-branding-projects.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { DefinedProjectUpdateToOneWithWhereWithoutBrandingProjectsInput } from './defined-project-update-to-one-with-where-without-branding-projects.input';

@InputType()
export class DefinedProjectUpdateOneWithoutBrandingProjectsNestedInput {

    @Field(() => DefinedProjectCreateWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutBrandingProjectsInput)
    create?: DefinedProjectCreateWithoutBrandingProjectsInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutBrandingProjectsInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutBrandingProjectsInput;

    @Field(() => DefinedProjectUpsertWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedProjectUpsertWithoutBrandingProjectsInput)
    upsert?: DefinedProjectUpsertWithoutBrandingProjectsInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    disconnect?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    delete?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectUpdateToOneWithWhereWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedProjectUpdateToOneWithWhereWithoutBrandingProjectsInput)
    update?: DefinedProjectUpdateToOneWithWhereWithoutBrandingProjectsInput;
}
