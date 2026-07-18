import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyModuleCreateManyCourseInput } from './defined-academy-module-create-many-course.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyModuleCreateManyCourseInputEnvelope {

    @Field(() => [DefinedAcademyModuleCreateManyCourseInput], {nullable:false})
    @Type(() => DefinedAcademyModuleCreateManyCourseInput)
    data!: Array<DefinedAcademyModuleCreateManyCourseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
