import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PhotoCategory } from '../prisma/photo-category.enum';
import { ProjectCreateNestedOneWithoutPhotosInput } from '../project/project-create-nested-one-without-photos.input';

@InputType()
export class ProjectPhotoCreateInput {

    @Field(() => String, {nullable:true})
    caption?: string;

    @Field(() => PhotoCategory, {nullable:false})
    category!: keyof typeof PhotoCategory;

    @Field(() => String, {nullable:true})
    stage?: string;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => ProjectCreateNestedOneWithoutPhotosInput, {nullable:false})
    project!: ProjectCreateNestedOneWithoutPhotosInput;
}
