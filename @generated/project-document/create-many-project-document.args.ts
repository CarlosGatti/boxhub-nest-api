import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectDocumentCreateManyInput } from './project-document-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProjectDocumentArgs {

    @Field(() => [ProjectDocumentCreateManyInput], {nullable:false})
    @Type(() => ProjectDocumentCreateManyInput)
    data!: Array<ProjectDocumentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
