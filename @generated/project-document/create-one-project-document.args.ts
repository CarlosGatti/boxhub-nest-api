import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectDocumentCreateInput } from './project-document-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProjectDocumentArgs {

    @Field(() => ProjectDocumentCreateInput, {nullable:false})
    @Type(() => ProjectDocumentCreateInput)
    data!: ProjectDocumentCreateInput;
}
