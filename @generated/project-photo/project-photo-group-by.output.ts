import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PhotoCategory } from '../prisma/photo-category.enum';
import { ProjectPhotoCountAggregate } from './project-photo-count-aggregate.output';
import { ProjectPhotoAvgAggregate } from './project-photo-avg-aggregate.output';
import { ProjectPhotoSumAggregate } from './project-photo-sum-aggregate.output';
import { ProjectPhotoMinAggregate } from './project-photo-min-aggregate.output';
import { ProjectPhotoMaxAggregate } from './project-photo-max-aggregate.output';

@ObjectType()
export class ProjectPhotoGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

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

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => ProjectPhotoCountAggregate, {nullable:true})
    _count?: ProjectPhotoCountAggregate;

    @Field(() => ProjectPhotoAvgAggregate, {nullable:true})
    _avg?: ProjectPhotoAvgAggregate;

    @Field(() => ProjectPhotoSumAggregate, {nullable:true})
    _sum?: ProjectPhotoSumAggregate;

    @Field(() => ProjectPhotoMinAggregate, {nullable:true})
    _min?: ProjectPhotoMinAggregate;

    @Field(() => ProjectPhotoMaxAggregate, {nullable:true})
    _max?: ProjectPhotoMaxAggregate;
}
