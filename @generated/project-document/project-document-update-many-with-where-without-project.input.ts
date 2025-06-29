import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectDocumentScalarWhereInput } from './project-document-scalar-where.input';
import { Type } from 'class-transformer';
import { ProjectDocumentUpdateManyMutationInput } from './project-document-update-many-mutation.input';

@InputType()
export class ProjectDocumentUpdateManyWithWhereWithoutProjectInput {

    @Field(() => ProjectDocumentScalarWhereInput, {nullable:false})
    @Type(() => ProjectDocumentScalarWhereInput)
    where!: ProjectDocumentScalarWhereInput;

    @Field(() => ProjectDocumentUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectDocumentUpdateManyMutationInput)
    data!: ProjectDocumentUpdateManyMutationInput;
}
