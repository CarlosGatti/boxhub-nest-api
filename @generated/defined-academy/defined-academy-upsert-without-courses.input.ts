import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUpdateWithoutCoursesInput } from './defined-academy-update-without-courses.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutCoursesInput } from './defined-academy-create-without-courses.input';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@InputType()
export class DefinedAcademyUpsertWithoutCoursesInput {

    @Field(() => DefinedAcademyUpdateWithoutCoursesInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutCoursesInput)
    update!: DefinedAcademyUpdateWithoutCoursesInput;

    @Field(() => DefinedAcademyCreateWithoutCoursesInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutCoursesInput)
    create!: DefinedAcademyCreateWithoutCoursesInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;
}
