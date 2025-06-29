import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectCreateWithoutDocumentsInput } from './project-create-without-documents.input';
import { Type } from 'class-transformer';
import { ProjectCreateOrConnectWithoutDocumentsInput } from './project-create-or-connect-without-documents.input';
import { Prisma } from '@prisma/client';
import { ProjectWhereUniqueInput } from './project-where-unique.input';

@InputType()
export class ProjectCreateNestedOneWithoutDocumentsInput {

    @Field(() => ProjectCreateWithoutDocumentsInput, {nullable:true})
    @Type(() => ProjectCreateWithoutDocumentsInput)
    create?: ProjectCreateWithoutDocumentsInput;

    @Field(() => ProjectCreateOrConnectWithoutDocumentsInput, {nullable:true})
    @Type(() => ProjectCreateOrConnectWithoutDocumentsInput)
    connectOrCreate?: ProjectCreateOrConnectWithoutDocumentsInput;

    @Field(() => ProjectWhereUniqueInput, {nullable:true})
    @Type(() => ProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<ProjectWhereUniqueInput, 'id'>;
}
