import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectDocumentUpdateManyMutationInput } from './project-document-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProjectDocumentWhereInput } from './project-document-where.input';

@ArgsType()
export class UpdateManyProjectDocumentArgs {

    @Field(() => ProjectDocumentUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectDocumentUpdateManyMutationInput)
    data!: ProjectDocumentUpdateManyMutationInput;

    @Field(() => ProjectDocumentWhereInput, {nullable:true})
    @Type(() => ProjectDocumentWhereInput)
    where?: ProjectDocumentWhereInput;
}
