import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedProjectWhereUniqueInput } from './defined-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutBrandingProjectsInput } from './defined-project-create-without-branding-projects.input';

@InputType()
export class DefinedProjectCreateOrConnectWithoutBrandingProjectsInput {

    @Field(() => DefinedProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedProjectWhereUniqueInput, 'id'>;

    @Field(() => DefinedProjectCreateWithoutBrandingProjectsInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutBrandingProjectsInput)
    create!: DefinedProjectCreateWithoutBrandingProjectsInput;
}
