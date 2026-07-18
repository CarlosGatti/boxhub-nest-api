import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceUpdateWithoutLessonInput } from './defined-academy-resource-update-without-lesson.input';

@InputType()
export class DefinedAcademyResourceUpdateWithWhereUniqueWithoutLessonInput {

    @Field(() => DefinedAcademyResourceWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>;

    @Field(() => DefinedAcademyResourceUpdateWithoutLessonInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateWithoutLessonInput)
    data!: DefinedAcademyResourceUpdateWithoutLessonInput;
}
