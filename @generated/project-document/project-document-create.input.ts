import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';
import { ProjectCreateNestedOneWithoutDocumentsInput } from '../project/project-create-nested-one-without-documents.input';

@InputType()
export class ProjectDocumentCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    fileUrl!: string;

    @Field(() => DocumentType, {nullable:false})
    type!: keyof typeof DocumentType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ProjectCreateNestedOneWithoutDocumentsInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutDocumentsInput;
}
