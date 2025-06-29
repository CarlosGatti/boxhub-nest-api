import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectDocumentCreateWithoutProjectInput } from './project-document-create-without-project.input';

@InputType()
export class ProjectDocumentCreateOrConnectWithoutProjectInput {

    @Field(() => ProjectDocumentWhereUniqueInput, {nullable:false})
    @Type(() => ProjectDocumentWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>;

    @Field(() => ProjectDocumentCreateWithoutProjectInput, {nullable:false})
    @Type(() => ProjectDocumentCreateWithoutProjectInput)
    create!: ProjectDocumentCreateWithoutProjectInput;
}
