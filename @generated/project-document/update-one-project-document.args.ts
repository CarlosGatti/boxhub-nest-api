import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectDocumentUpdateInput } from './project-document-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';

@ArgsType()
export class UpdateOneProjectDocumentArgs {

    @Field(() => ProjectDocumentUpdateInput, {nullable:false})
    @Type(() => ProjectDocumentUpdateInput)
    data!: ProjectDocumentUpdateInput;

    @Field(() => ProjectDocumentWhereUniqueInput, {nullable:false})
    @Type(() => ProjectDocumentWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>;
}
