import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCreateManyCourseInput } from './defined-academy-career-stage-content-create-many-course.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyCareerStageContentCreateManyCourseInputEnvelope {

    @Field(() => [DefinedAcademyCareerStageContentCreateManyCourseInput], {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentCreateManyCourseInput)
    data!: Array<DefinedAcademyCareerStageContentCreateManyCourseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
