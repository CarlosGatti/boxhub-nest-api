import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyLessonWhereInput } from './defined-academy-lesson-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyLessonOrderByWithRelationInput } from './defined-academy-lesson-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyLessonWhereUniqueInput } from './defined-academy-lesson-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DefinedAcademyLessonScalarFieldEnum } from './defined-academy-lesson-scalar-field.enum';

@ArgsType()
export class FindManyDefinedAcademyLessonArgs {

    @Field(() => DefinedAcademyLessonWhereInput, {nullable:true})
    @Type(() => DefinedAcademyLessonWhereInput)
    where?: DefinedAcademyLessonWhereInput;

    @Field(() => [DefinedAcademyLessonOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DefinedAcademyLessonOrderByWithRelationInput>;

    @Field(() => DefinedAcademyLessonWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DefinedAcademyLessonWhereUniqueInput, 'id' | 'moduleId_slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DefinedAcademyLessonScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DefinedAcademyLessonScalarFieldEnum>;
}
