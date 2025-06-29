import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutDocumentsInput } from './project-update-without-documents.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutDocumentsInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutDocumentsInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutDocumentsInput)
    data!: ProjectUpdateWithoutDocumentsInput;
}
