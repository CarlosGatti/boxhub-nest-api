import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentType } from '../prisma/defined-academy-career-stage-content-type.enum';
import { DefinedAcademyCareerStage } from '../defined-academy-career-stage/defined-academy-career-stage.model';
import { DefinedAcademyCourse } from '../defined-academy-course/defined-academy-course.model';
import { DefinedAcademyResource } from '../defined-academy-resource/defined-academy-resource.model';

@ObjectType()
export class DefinedAcademyCareerStageContent {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    stageId!: number;

    @Field(() => DefinedAcademyCareerStageContentType, {nullable:false})
    contentType!: keyof typeof DefinedAcademyCareerStageContentType;

    @Field(() => Int, {nullable:true})
    courseId!: number | null;

    @Field(() => Int, {nullable:true})
    resourceId!: number | null;

    @Field(() => String, {nullable:true})
    label!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sortOrder!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademyCareerStage, {nullable:false})
    stage?: DefinedAcademyCareerStage;

    @Field(() => DefinedAcademyCourse, {nullable:true})
    course?: DefinedAcademyCourse | null;

    @Field(() => DefinedAcademyResource, {nullable:true})
    resource?: DefinedAcademyResource | null;
}
