import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutDocumentsInput } from './project-create-without-documents.input';

@InputType()
export class ProjectCreateOrConnectWithoutDocumentsInput {

    @Field(() => ProjectWhereUniqueInput, {nullable:false})
    @Type(() => ProjectWhereUniqueInput)
    where!: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;

    @Field(() => ProjectCreateWithoutDocumentsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutDocumentsInput)
    create!: ProjectCreateWithoutDocumentsInput;
}
