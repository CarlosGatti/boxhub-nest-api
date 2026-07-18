import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseCreateWithoutAcademyInput } from './defined-academy-course-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCourseCreateOrConnectWithoutAcademyInput } from './defined-academy-course-create-or-connect-without-academy.input';
import { DefinedAcademyCourseCreateManyAcademyInputEnvelope } from './defined-academy-course-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCourseWhereUniqueInput } from './defined-academy-course-where-unique.input';

@InputType()
export class DefinedAcademyCourseUncheckedCreateNestedManyWithoutAcademyInput {

    @Field(() => [DefinedAcademyCourseCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyCourseCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyCourseCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyCourseCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyCourseCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyCourseCreateOrConnectWithoutAcademyInput>;

    @Field(() => DefinedAcademyCourseCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCourseCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyCourseCreateManyAcademyInputEnvelope;

    @Field(() => [DefinedAcademyCourseWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyCourseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyCourseWhereUniqueInput, 'id' | 'academyId_slug'>>;
}
