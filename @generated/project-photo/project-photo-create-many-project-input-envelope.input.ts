import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectPhotoCreateManyProjectInput } from './project-photo-create-many-project.input';
import { Type } from 'class-transformer';

@InputType()
export class ProjectPhotoCreateManyProjectInputEnvelope {

    @Field(() => [ProjectPhotoCreateManyProjectInput], {nullable:false})
    @Type(() => ProjectPhotoCreateManyProjectInput)
    data!: Array<ProjectPhotoCreateManyProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
