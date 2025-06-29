import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectDocumentWhereInput } from './project-document-where.input';
import { Type } from 'class-transformer';
import { ProjectDocumentOrderByWithRelationInput } from './project-document-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ProjectDocumentWhereUniqueInput } from './project-document-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ProjectDocumentScalarFieldEnum } from './project-document-scalar-field.enum';

@ArgsType()
export class FindFirstProjectDocumentOrThrowArgs {

    @Field(() => ProjectDocumentWhereInput, {nullable:true})
    @Type(() => ProjectDocumentWhereInput)
    where?: ProjectDocumentWhereInput;

    @Field(() => [ProjectDocumentOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ProjectDocumentOrderByWithRelationInput>;

    @Field(() => ProjectDocumentWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ProjectDocumentWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ProjectDocumentScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ProjectDocumentScalarFieldEnum>;
}
