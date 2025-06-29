import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueProjectDocumentArgs {

    @Field(() => ProjectDocumentWhereUniqueInput, {nullable:false})
    @Type(() => ProjectDocumentWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>;
}
