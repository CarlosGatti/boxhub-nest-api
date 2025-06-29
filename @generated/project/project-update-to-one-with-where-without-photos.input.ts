import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectWhereInput } from './project-where.input';
import { Type } from 'class-transformer';
import { ProjectUpdateWithoutPhotosInput } from './project-update-without-photos.input';

@InputType()
export class ProjectUpdateToOneWithWhereWithoutPhotosInput {

    @Field(() => ProjectWhereInput, {nullable:true})
    @Type(() => ProjectWhereInput)
    where?: ProjectWhereInput;

    @Field(() => ProjectUpdateWithoutPhotosInput, {nullable:false})
    @Type(() => ProjectUpdateWithoutPhotosInput)
    data!: ProjectUpdateWithoutPhotosInput;
}
