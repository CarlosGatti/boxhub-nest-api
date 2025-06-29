import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProjectPhotoWhereInput } from './project-photo-where.input';

@InputType()
export class ProjectPhotoListRelationFilter {

    @Field(() => ProjectPhotoWhereInput, {nullable:true})
    every?: ProjectPhotoWhereInput;

    @Field(() => ProjectPhotoWhereInput, {nullable:true})
    some?: ProjectPhotoWhereInput;

    @Field(() => ProjectPhotoWhereInput, {nullable:true})
    none?: ProjectPhotoWhereInput;
}
