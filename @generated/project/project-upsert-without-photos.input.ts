import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectUpdateWithoutPhotosInput } from './project-update-without-photos.input';
import { Type } from 'class-transformer';
import { ProjectCreateWithoutPhotosInput } from './project-create-without-photos.input';
import { ProjectWhereInput } from './project-where.input';

@InputType()
export class ProjectUpsertWithoutPhotosInput {

    @Field(() => ProjectUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutPhotosInput)
    update!: ProjectUpdateWithoutPhotosInput;

    @Field(() => ProjectCreateWithoutPhotosInput, {nullable:false})
    @Type(() => ProjectCreateWithoutPhotosInput)
    create!: ProjectCreateWithoutPhotosInput;

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;
}
