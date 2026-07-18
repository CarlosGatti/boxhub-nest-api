import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutCoursesInput } from './defined-academy-create-without-courses.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutCoursesInput } from './defined-academy-create-or-connect-without-courses.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';

@InputType()
export class DefinedAcademyCreateNestedOneWithoutCoursesInput {

    @Field(() => DefinedAcademyCreateWithoutCoursesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutCoursesInput)
    create?: DefinedAcademyCreateWithoutCoursesInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutCoursesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutCoursesInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutCoursesInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;
}
