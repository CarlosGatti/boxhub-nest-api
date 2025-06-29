import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutDocumentsInput } from './project-update-without-documents.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutDocumentsInput } from './project-create-without-documents.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutDocumentsInput {

    @Field(() => ProjectUpdateWithoutDocumentsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutDocumentsInput)
    update!: ProjectUpdateWithoutDocumentsInput;

    @Field(() => ProjectCreateWithoutDocumentsInput, {nullable:false})
    @Type(() => ProjectCreateWithoutDocumentsInput)
    create!: ProjectCreateWithoutDocumentsInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
