import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';
import { Type } from 'class-transformer';
import { DefinedProjectUpdateWithoutBrandingProjectsInput } from './defined-project-update-without-branding-projects.input';

@InputType()
export class DefinedProjectUpdateToOneWithWhereWithoutBrandingProjectsInput {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    @Type(() => DefinedProjectWhereInput)
    where?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectUpdateWithoutBrandingProjectsInput, {nullable:false})
    @Type(() => DefinedProjectUpdateWithoutBrandingProjectsInput)
    data!: DefinedProjectUpdateWithoutBrandingProjectsInput;
}
