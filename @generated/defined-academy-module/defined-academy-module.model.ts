import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyContentStatus } from '../prisma/defined-academy-content-status.enum';
import { DefinedAcademyCourse } from '../defined-academy-course/defined-academy-course.model';
import { DefinedAcademyLesson } from '../defined-academy-lesson/defined-academy-lesson.model';
import { DefinedAcademyModuleCount } from './defined-academy-module-count.output';

@ObjectType()
export class DefinedAcademyModule {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    courseId!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false,defaultValue:0})
    sortOrder!: number;

    @Field(() => DefinedAcademyContentStatus, {nullable:false,defaultValue:'DRAFT'})
    status!: keyof typeof DefinedAcademyContentStatus;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedAcademyCourse, {nullable:false})
    course?: DefinedAcademyCourse;

    @Field(() => [DefinedAcademyLesson], {nullable:true})
    lessons?: Array<DefinedAcademyLesson>;

    @Field(() => DefinedAcademyModuleCount, {nullable:false})
    _count?: DefinedAcademyModuleCount;
}
