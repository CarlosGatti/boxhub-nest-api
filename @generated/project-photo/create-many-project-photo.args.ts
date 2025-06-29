import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectPhotoCreateManyInput } from './project-photo-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyProjectPhotoArgs {

    @Field(() => [ProjectPhotoCreateManyInput], {nullable:false})
    @Type(() => ProjectPhotoCreateManyInput)
    data!: Array<ProjectPhotoCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
