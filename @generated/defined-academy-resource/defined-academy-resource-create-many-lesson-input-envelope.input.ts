import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateManyLessonInput } from './defined-academy-resource-create-many-lesson.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyResourceCreateManyLessonInputEnvelope {

    @Field(() => [DefinedAcademyResourceCreateManyLessonInput], {nullable:false})
    @Type(() => DefinedAcademyResourceCreateManyLessonInput)
    data!: Array<DefinedAcademyResourceCreateManyLessonInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
