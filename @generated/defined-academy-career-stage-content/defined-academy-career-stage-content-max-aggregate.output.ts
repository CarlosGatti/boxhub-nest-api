import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentType } from '../prisma/defined-academy-career-stage-content-type.enum';

@ObjectType()
export class DefinedAcademyCareerStageContentMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    stageId?: number;

    @Field(() => DefinedAcademyCareerStageContentType, {nullable:true})
    contentType?: keyof typeof DefinedAcademyCareerStageContentType;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => Int, {nullable:true})
    resourceId?: number;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
