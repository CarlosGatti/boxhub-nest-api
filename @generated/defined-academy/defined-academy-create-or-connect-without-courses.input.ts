import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutCoursesInput } from './defined-academy-create-without-courses.input';

@InputType()
export class DefinedAcademyCreateOrConnectWithoutCoursesInput {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyCreateWithoutCoursesInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutCoursesInput)
    create!: DefinedAcademyCreateWithoutCoursesInput;
}
