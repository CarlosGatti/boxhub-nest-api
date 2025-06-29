import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotoCategory } from '../prisma/photo-category.enum';
import { Project } from '../project/project.model';

@ObjectType()
export class ProjectPhoto {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:true})
    caption!: string | null;

    @Field(() => PhotoCategory, {nullable:false})
    category!: keyof typeof PhotoCategory;

    @Field(() => String, {nullable:true})
    stage!: string | null;

    @Field(() => String, {nullable:false})
    imageUrl!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Project, {nullable:false})
    project?: Project;
}
