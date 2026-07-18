import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutCoursesInput } from './defined-academy-create-without-courses.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutCoursesInput } from './defined-academy-create-or-connect-without-courses.input';
import { DefinedAcademyUpsertWithoutCoursesInput } from './defined-academy-upsert-without-courses.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { DefinedAcademyUpdateToOneWithWhereWithoutCoursesInput } from './defined-academy-update-to-one-with-where-without-courses.input';

@InputType()
export class DefinedAcademyUpdateOneRequiredWithoutCoursesNestedInput {

    @Field(() => DefinedAcademyCreateWithoutCoursesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutCoursesInput)
    create?: DefinedAcademyCreateWithoutCoursesInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutCoursesInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutCoursesInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutCoursesInput;

    @Field(() => DefinedAcademyUpsertWithoutCoursesInput, {nullable:true})
    @Type(() => DefinedAcademyUpsertWithoutCoursesInput)
    upsert?: DefinedAcademyUpsertWithoutCoursesInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyUpdateToOneWithWhereWithoutCoursesInput, {nullable:true})
    @Type(() => DefinedAcademyUpdateToOneWithWhereWithoutCoursesInput)
    update?: DefinedAcademyUpdateToOneWithWhereWithoutCoursesInput;
}
