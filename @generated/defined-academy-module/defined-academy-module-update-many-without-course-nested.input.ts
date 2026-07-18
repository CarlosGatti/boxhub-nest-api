import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyModuleCreateWithoutCourseInput } from './defined-academy-module-create-without-course.input';
import { Type } from 'class-transformer';
import { DefinedAcademyModuleCreateOrConnectWithoutCourseInput } from './defined-academy-module-create-or-connect-without-course.input';
import { DefinedAcademyModuleUpsertWithWhereUniqueWithoutCourseInput } from './defined-academy-module-upsert-with-where-unique-without-course.input';
import { DefinedAcademyModuleCreateManyCourseInputEnvelope } from './defined-academy-module-create-many-course-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyModuleWhereUniqueInput } from './defined-academy-module-where-unique.input';
import { DefinedAcademyModuleUpdateWithWhereUniqueWithoutCourseInput } from './defined-academy-module-update-with-where-unique-without-course.input';
import { DefinedAcademyModuleUpdateManyWithWhereWithoutCourseInput } from './defined-academy-module-update-many-with-where-without-course.input';
import { DefinedAcademyModuleScalarWhereInput } from './defined-academy-module-scalar-where.input';

@InputType()
export class DefinedAcademyModuleUpdateManyWithoutCourseNestedInput {

    @Field(() => [DefinedAcademyModuleCreateWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyModuleCreateWithoutCourseInput)
    create?: Array<DefinedAcademyModuleCreateWithoutCourseInput>;

    @Field(() => [DefinedAcademyModuleCreateOrConnectWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyModuleCreateOrConnectWithoutCourseInput)
    connectOrCreate?: Array<DefinedAcademyModuleCreateOrConnectWithoutCourseInput>;

    @Field(() => [DefinedAcademyModuleUpsertWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyModuleUpsertWithWhereUniqueWithoutCourseInput)
    upsert?: Array<DefinedAcademyModuleUpsertWithWhereUniqueWithoutCourseInput>;

    @Field(() => DefinedAcademyModuleCreateManyCourseInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyModuleCreateManyCourseInputEnvelope)
    createMany?: DefinedAcademyModuleCreateManyCourseInputEnvelope;

    @Field(() => [DefinedAcademyModuleWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyModuleWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyModuleWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyModuleWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyModuleWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyModuleWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyModuleUpdateWithWhereUniqueWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyModuleUpdateWithWhereUniqueWithoutCourseInput)
    update?: Array<DefinedAcademyModuleUpdateWithWhereUniqueWithoutCourseInput>;

    @Field(() => [DefinedAcademyModuleUpdateManyWithWhereWithoutCourseInput], {nullable:true})
    @Type(() => DefinedAcademyModuleUpdateManyWithWhereWithoutCourseInput)
    updateMany?: Array<DefinedAcademyModuleUpdateManyWithWhereWithoutCourseInput>;

    @Field(() => [DefinedAcademyModuleScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyModuleScalarWhereInput)
    deleteMany?: Array<DefinedAcademyModuleScalarWhereInput>;
}
