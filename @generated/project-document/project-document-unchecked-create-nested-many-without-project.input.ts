import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectDocumentCreateWithoutProjectInput } from './project-document-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectDocumentCreateOrConnectWithoutProjectInput } from './project-document-create-or-connect-without-project.input';
import { ProjectDocumentCreateManyProjectInputEnvelope } from './project-document-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';

@InputType()
export class ProjectDocumentUncheckedCreateNestedManyWithoutProjectInput {

    @Field(() => [ProjectDocumentCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectDocumentCreateWithoutProjectInput)
    create?: Array<ProjectDocumentCreateWithoutProjectInput>;

    @Field(() => [ProjectDocumentCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectDocumentCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectDocumentCreateOrConnectWithoutProjectInput>;

    @Field(() => ProjectDocumentCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectDocumentCreateManyProjectInputEnvelope)
    createMany?: ProjectDocumentCreateManyProjectInputEnvelope;

    @Field(() => [ProjectDocumentWhereUniqueInput], {nullable:true})
    @Type(() => ProjectDocumentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>>;
}
