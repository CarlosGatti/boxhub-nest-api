import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectDocumentCreateManyProjectInput } from './project-document-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectDocumentCreateManyProjectInputEnvelope {

    @Field(() => [ProjectDocumentCreateManyProjectInput], {nullable:false})
    @Type(() => ProjectDocumentCreateManyProjectInput)
    data!: Array<ProjectDocumentCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
