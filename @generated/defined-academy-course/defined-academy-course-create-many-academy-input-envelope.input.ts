import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateManyAcademyInput } from './defined-academy-course-create-many-academy.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyCourseCreateManyAcademyInputEnvelope {

    @Field(() => [DefinedAcademyCourseCreateManyAcademyInput], {nullable:false})
    @Type(() => DefinedAcademyCourseCreateManyAcademyInput)
    data!: Array<DefinedAcademyCourseCreateManyAcademyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
