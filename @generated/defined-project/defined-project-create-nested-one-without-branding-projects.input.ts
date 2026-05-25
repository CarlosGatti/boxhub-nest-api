import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectCreateWithoutBrandingProjectsInput } from './defined-project-create-without-branding-projects.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateOrConnectWithoutBrandingProjectsInput } from './defined-project-create-or-connect-without-branding-projects.input';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';

@InputType()
export class DefinedProjectCreateNestedOneWithoutBrandingProjectsInput {

    @Field(() => DefinedProjectCreateWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedProjectCreateWithoutBrandingProjectsInput)
    create?: DefinedProjectCreateWithoutBrandingProjectsInput;

    @Field(() => DefinedProjectCreateOrConnectWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedProjectCreateOrConnectWithoutBrandingProjectsInput)
    connectOrCreate?: DefinedProjectCreateOrConnectWithoutBrandingProjectsInput;

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;
}
