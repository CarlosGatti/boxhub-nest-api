import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectUpdateWithoutBrandingProjectsInput } from './defined-project-update-without-branding-projects.input';
import { Type } from 'class-transformer';
import { DefinedProjectCreateWithoutBrandingProjectsInput } from './defined-project-create-without-branding-projects.input';
import { DefinedProjectWhereInput } from './defined-project-where.input';

@InputType()
export class DefinedProjectUpsertWithoutBrandingProjectsInput {

    @Field(() => DefinedProjectUpdateWithoutBrandingProjectsInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutBrandingProjectsInput)
    update!: DefinedProjectUpdateWithoutBrandingProjectsInput;

    @Field(() => DefinedProjectCreateWithoutBrandingProjectsInput, {nullable:false})
    @Type(() => DefinedProjectCreateWithoutBrandingProjectsInput)
    create!: DefinedProjectCreateWithoutBrandingProjectsInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;
}
