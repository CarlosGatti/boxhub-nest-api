import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DocumentType } from '../prisma/document-type.enum';

@InputType()
export class ProjectDocumentUncheckedCreateWithoutProjectInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    fileUrl!: string;

    @Field(() => DocumentType, {nullable:false})
    type!: keyof typeof DocumentType;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
