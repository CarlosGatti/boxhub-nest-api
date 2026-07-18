import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonCreateManyModuleInput } from './defined-academy-lesson-create-many-module.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyLessonCreateManyModuleInputEnvelope {

    @Field(() => [DefinedAcademyLessonCreateManyModuleInput], {nullable:false})
    @Type(() => DefinedAcademyLessonCreateManyModuleInput)
    data!: Array<DefinedAcademyLessonCreateManyModuleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
