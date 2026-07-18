import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyModuleCreateWithoutCourseInput } from './defined-academy-module-create-without-course.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleCreateOrConnectWithoutCourseInput } from './defined-academy-module-create-or-connect-without-course.input';
import { DefinedAcademyModuleCreateManyCourseInputEnvelope } from './defined-academy-module-create-many-course-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyModuleWhereUniqueInput } from './defined-academy-module-where-unique.input';

@InputType()
export class DefinedAcademyModuleCreateNestedManyWithoutCourseInput {

    @Field(() => [DefinedAcademyModuleCreateWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyModuleCreateWithoutCourseInput)
    create?: Array<DefinedAcademyModuleCreateWithoutCourseInput>;

    @Field(() => [DefinedAcademyModuleCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyModuleCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<DefinedAcademyModuleCreateOrConnectWithoutCourseInput>;

    @Field(() => DefinedAcademyModuleCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyModuleCreateManyCourseInputEnvelope)
    createMany?: DefinedAcademyModuleCreateManyCourseInputEnvelope;

    @Field(() => [DefinedAcademyModuleWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>>;
}
