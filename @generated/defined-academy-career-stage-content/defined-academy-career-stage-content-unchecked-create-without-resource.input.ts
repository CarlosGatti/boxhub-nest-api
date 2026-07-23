import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentType } from '../prisma/defined-academy-career-stage-content-type.enum';

@InputType()
export class DefinedAcademyCareerStageContentUncheckedCreateWithoutResourceInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:false})
    stageId!: number;

    @Field(() => DefinedAcademyCareerStageContentType, {nullable:false})
    contentType!: keyof typeof DefinedAcademyCareerStageContentType;

    @Field(() => Int, {nullable:true})
    courseId?: number;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
