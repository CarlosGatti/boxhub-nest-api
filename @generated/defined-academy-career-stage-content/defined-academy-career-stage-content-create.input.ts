import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentType } from '../prisma/defined-academy-career-stage-content-type.enum';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateNestedOneWithoutContentLinksInput } from '../defined-academy-career-stage/defined-academy-career-stage-create-nested-one-without-content-links.input';
import { DefinedAcademyCourseCreateNestedOneWithoutCareerStageLinksInput } from '../defined-academy-course/defined-academy-course-create-nested-one-without-career-stage-links.input';
import { DefinedAcademyResourceCreateNestedOneWithoutCareerStageLinksInput } from '../defined-academy-resource/defined-academy-resource-create-nested-one-without-career-stage-links.input';

@InputType()
export class DefinedAcademyCareerStageContentCreateInput {

    @Field(() => DefinedAcademyCareerStageContentType, {nullable:false})
    contentType!: keyof typeof DefinedAcademyCareerStageContentType;

    @Field(() => String, {nullable:true})
    label?: string;

    @Field(() => Int, {nullable:true})
    sortOrder?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => DefinedAcademyCareerStageCreateNestedOneWithoutContentLinksInput, {nullable:false})
    stage!: DefinedAcademyCareerStageCreateNestedOneWithoutContentLinksInput;

    @Field(() => DefinedAcademyCourseCreateNestedOneWithoutCareerStageLinksInput, {nullable:true})
    course?: DefinedAcademyCourseCreateNestedOneWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyResourceCreateNestedOneWithoutCareerStageLinksInput, {nullable:true})
    resource?: DefinedAcademyResourceCreateNestedOneWithoutCareerStageLinksInput;
}
