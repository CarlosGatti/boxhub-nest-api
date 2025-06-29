import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';

@ObjectType()
export class ProjectDocumentMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    fileUrl?: string;

    @Field(() => DocumentType, {nullable:true})
    type?: keyof typeof DocumentType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
