import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutCreatedByInput } from './defined-academy-course-create-without-created-by.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutCreatedByInput } from './defined-academy-course-create-or-connect-without-created-by.input';
import { DefinedAcademyCourseCreateManyCreatedByInputEnvelope } from './defined-academy-course-create-many-created-by-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';

@InputType()
export class DefinedAcademyCourseCreateNestedManyWithoutCreatedByInput {

    @Field(() => [DefinedAcademyCourseCreateWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutCreatedByInput)
    create?: Array<DefinedAcademyCourseCreateWithoutCreatedByInput>;

    @Field(() => [DefinedAcademyCourseCreateOrConnectWithoutCreatedByInput], {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutCreatedByInput)
    connectOrCreate?: Array<DefinedAcademyCourseCreateOrConnectWithoutCreatedByInput>;

    @Field(() => DefinedAcademyCourseCreateManyCreatedByInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateManyCreatedByInputEnvelope)
    createMany?: DefinedAcademyCourseCreateManyCreatedByInputEnvelope;

    @Field(() => [DefinedAcademyCourseWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>>;
}
