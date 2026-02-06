import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ReviewCardProject } from '../review-card-project/review-card-project.model';

@ObjectType()
export class ReviewCardScanEvent {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:true})
    ipHash!: string | null;

    @Field(() => String, {nullable:true})
    userAgent!: string | null;

    @Field(() => String, {nullable:true})
    referer!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => ReviewCardProject, {nullable:false})
    project?: ReviewCardProject;
}
