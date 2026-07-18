import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressWhereInput } from './defined-academy-lesson-progress-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonProgressOrderByWithRelationInput } from './defined-academy-lesson-progress-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonProgressWhereUniqueInput } from './defined-academy-lesson-progress-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressScalarFieldEnum } from './defined-academy-lesson-progress-scalar-field.enum';

@ArgsType()
export class FindManyDefinedAcademyLessonProgressArgs {

    @Field(() => DefinedAcademyLessonProgressWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonProgressWhereInput)
    where?: DefinedAcademyLessonProgressWhereInput;

    @Field(() => [DefinedAcademyLessonProgressOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyLessonProgressOrderByWithRelationInput>;

    @Field(() => DefinedAcademyLessonProgressWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyLessonProgressWhereUniqueInput, 'id' | 'enrollmentId_lessonId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyLessonProgressScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyLessonProgressScalarFieldEnum>;
}
