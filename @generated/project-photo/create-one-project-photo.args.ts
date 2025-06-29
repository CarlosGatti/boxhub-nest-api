import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectPhotoCreateInput } from './project-photo-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneProjectPhotoArgs {

    @Field(() => ProjectPhotoCreateInput, {nullable:false})
    @Type(() => ProjectPhotoCreateInput)
    data!: ProjectPhotoCreateInput;
}
