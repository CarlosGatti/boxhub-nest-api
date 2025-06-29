import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectDocumentUpdateWithoutProjectInput } from './project-document-update-without-project.input';
import { ProjectDocumentCreateWithoutProjectInput } from './project-document-create-without-project.input';

@InputType()
export class ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput {

    @Field(() => ProjectDocumentWhereUniqueInput, {nullable:false})
    @Type(() => ProjectDocumentWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>;

    @Field(() => ProjectDocumentUpdateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectDocumentUpdateWithoutProjectInput)
    update!: ProjectDocumentUpdateWithoutProjectInput;

    @Field(() => ProjectDocumentCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectDocumentCreateWithoutProjectInput)
    create!: ProjectDocumentCreateWithoutProjectInput;
}
