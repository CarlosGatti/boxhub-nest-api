import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectPhotoScalarWhereInput } from './project-photo-scalar-where.input';
import { Type } from 'class-transformer';
import { ProjectPhotoUpdateManyMutationInput } from './project-photo-update-many-mutation.input';

@InputType()
export class ProjectPhotoUpdateManyWithWhereWithoutProjectInput {

    @Field(() => ProjectPhotoScalarWhereInput, {nullable:false})
    @Type(() => ProjectPhotoScalarWhereInput)
    where!: ProjectPhotoScalarWhereInput;

    @Field(() => ProjectPhotoUpdateManyMutationInput, {nullable:false})
    @Type(() => ProjectPhotoUpdateManyMutationInput)
    data!: ProjectPhotoUpdateManyMutationInput;
}
