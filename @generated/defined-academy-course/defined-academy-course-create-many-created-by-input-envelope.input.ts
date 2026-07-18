import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateManyCreatedByInput } from './defined-academy-course-create-many-created-by.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyCourseCreateManyCreatedByInputEnvelope {

    @Field(() => [DefinedAcademyCourseCreateManyCreatedByInput], {nullable:false})
    @Type(() => DefinedAcademyCourseCreateManyCreatedByInput)
    data!: Array<DefinedAcademyCourseCreateManyCreatedByInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
