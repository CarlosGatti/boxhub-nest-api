import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotoCategory } from '../prisma/photo-category.enum';

@InputType()
export class ProjectPhotoCreateManyInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

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
}
