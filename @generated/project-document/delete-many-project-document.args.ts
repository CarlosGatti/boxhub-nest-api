import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectDocumentWhereInput } from './project-document-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyProjectDocumentArgs {

    @Field(() => ProjectDocumentWhereInput, {nullable:true})
    @Type(() => ProjectDocumentWhereInput)
    where?: ProjectDocumentWhereInput;
}
