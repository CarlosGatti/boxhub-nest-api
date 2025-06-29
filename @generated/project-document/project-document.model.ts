import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';
import { Project } from '../project/project.model';

@ObjectType()
export class ProjectDocument {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    fileUrl!: string;

    @Field(() => DocumentType, {nullable:false})
    type!: keyof typeof DocumentType;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Project, {nullable:false})
    project?: Project;
}
