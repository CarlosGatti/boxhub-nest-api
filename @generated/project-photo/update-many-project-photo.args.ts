import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProjectPhotoUpdateManyMutationInput } from './project-photo-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProjectPhotoWhereInput } from './project-photo-where.input';

@ArgsType()
export class UpdateManyProjectPhotoArgs {

    @Field(() => ProjectPhotoUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectPhotoUpdateManyMutationInput)
    data!: ProjectPhotoUpdateManyMutationInput;

    @Field(() => ProjectPhotoWhereInput, {nullable:true})
    @Type(() => ProjectPhotoWhereInput)
    where?: ProjectPhotoWhereInput;
}
