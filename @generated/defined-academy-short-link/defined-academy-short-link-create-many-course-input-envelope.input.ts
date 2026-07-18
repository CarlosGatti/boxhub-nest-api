import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkCreateManyCourseInput } from './defined-academy-short-link-create-many-course.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyShortLinkCreateManyCourseInputEnvelope {

    @Field(() => [DefinedAcademyShortLinkCreateManyCourseInput], {nullable:false})
    @Type(() => DefinedAcademyShortLinkCreateManyCourseInput)
    data!: Array<DefinedAcademyShortLinkCreateManyCourseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
