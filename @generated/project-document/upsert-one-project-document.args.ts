import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectDocumentCreateInput } from './project-document-create.input';
import { ProjectDocumentUpdateInput } from './project-document-update.input';

@ArgsType()
export class UpsertOneProjectDocumentArgs {

    @Field(() => ProjectDocumentWhereUniqueInput, {nullable:false})
    @Type(() => ProjectDocumentWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>;

    @Field(() => ProjectDocumentCreateInput, {nullable:false})
    @Type(() => ProjectDocumentCreateInput)
    create!: ProjectDocumentCreateInput;

    @Field(() => ProjectDocumentUpdateInput, {nullable:false})
    @Type(() => ProjectDocumentUpdateInput)
    update!: ProjectDocumentUpdateInput;
}
