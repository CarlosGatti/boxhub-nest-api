import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotoCategory } from '../prisma/photo-category.enum';

@ObjectType()
export class ProjectPhotoMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    projectId?: number;

    @Field(() => String, {nullable:true})
    caption?: string;

    @Field(() => PhotoCategory, {nullable:true})
    category?: keyof typeof PhotoCategory;

    @Field(() => String, {nullable:true})
    stage?: string;

    @Field(() => String, {nullable:true})
    imageUrl?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
