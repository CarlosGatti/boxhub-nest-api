import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectDocumentWhereInput } from './project-document-where.input';

@InputType()
export class ProjectDocumentListRelationFilter {

    @Field(() => ProjectDocumentWhereInput, {nullable:true})
    every?: ProjectDocumentWhereInput;

    @Field(() => ProjectDocumentWhereInput, {nullable:true})
    some?: ProjectDocumentWhereInput;

    @Field(() => ProjectDocumentWhereInput, {nullable:true})
    none?: ProjectDocumentWhereInput;
}
