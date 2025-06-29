import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectDocumentCreateWithoutProjectInput } from './project-document-create-without-project.input';
import { Type } from 'class-transformer';
import { ProjectDocumentCreateOrConnectWithoutProjectInput } from './project-document-create-or-connect-without-project.input';
import { ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput } from './project-document-upsert-with-where-unique-without-project.input';
import { ProjectDocumentCreateManyProjectInputEnvelope } from './project-document-create-many-project-input-envelope.input';
import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
import { ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput } from './project-document-update-with-where-unique-without-project.input';
import { ProjectDocumentUpdateManyWithWhereWithoutProjectInput } from './project-document-update-many-with-where-without-project.input';
import { ProjectDocumentScalarWhereInput } from './project-document-scalar-where.input';

@InputType()
export class ProjectDocumentUpdateManyWithoutProjectNestedInput {

    @Field(() => [ProjectDocumentCreateWithoutProjectInput], {nullable:true})
    @Type(() => ProjectDocumentCreateWithoutProjectInput)
    create?: Array<ProjectDocumentCreateWithoutProjectInput>;

    @Field(() => [ProjectDocumentCreateOrConnectWithoutProjectInput], {nullable:true})
    @Type(() => ProjectDocumentCreateOrConnectWithoutProjectInput)
    connectOrCreate?: Array<ProjectDocumentCreateOrConnectWithoutProjectInput>;

    @Field(() => [ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput)
    upsert?: Array<ProjectDocumentUpsertWithWhereUniqueWithoutProjectInput>;

    @Field(() => ProjectDocumentCreateManyProjectInputEnvelope, {nullable:true})
    @Type(() => ProjectDocumentCreateManyProjectInputEnvelope)
    createMany?: ProjectDocumentCreateManyProjectInputEnvelope;

    @Field(() => [ProjectDocumentWhereUniqueInput], {nullable:true})
    @Type(() => ProjectDocumentWhereUniqueInput)
    set?: Array<Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectDocumentWhereUniqueInput], {nullable:true})
    @Type(() => ProjectDocumentWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectDocumentWhereUniqueInput], {nullable:true})
    @Type(() => ProjectDocumentWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectDocumentWhereUniqueInput], {nullable:true})
    @Type(() => ProjectDocumentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>>;

    @Field(() => [ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput], {nullable:true})
    @Type(() => ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput)
    update?: Array<ProjectDocumentUpdateWithWhereUniqueWithoutProjectInput>;

    @Field(() => [ProjectDocumentUpdateManyWithWhereWithoutProjectInput], {nullable:true})
    @Type(() => ProjectDocumentUpdateManyWithWhereWithoutProjectInput)
    updateMany?: Array<ProjectDocumentUpdateManyWithWhereWithoutProjectInput>;

    @Field(() => [ProjectDocumentScalarWhereInput], {nullable:true})
    @Type(() => ProjectDocumentScalarWhereInput)
    deleteMany?: Array<ProjectDocumentScalarWhereInput>;
}
