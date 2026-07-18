import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateWithoutCoursesInput } from './defined-academy-update-without-courses.input';

@InputType()
export class DefinedAcademyUpdateToOneWithWhereWithoutCoursesInput {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyUpdateWithoutCoursesInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutCoursesInput)
    data!: DefinedAcademyUpdateWithoutCoursesInput;
}
