import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutLessonInput } from './defined-academy-resource-create-without-lesson.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutLessonInput } from './defined-academy-resource-create-or-connect-without-lesson.input';
import { DefinedAcademyResourceCreateManyLessonInputEnvelope } from './defined-academy-resource-create-many-lesson-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';

@InputType()
export class DefinedAcademyResourceCreateNestedManyWithoutLessonInput {

    @Field(() => [DefinedAcademyResourceCreateWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutLessonInput)
    create?: Array<DefinedAcademyResourceCreateWithoutLessonInput>;

    @Field(() => [DefinedAcademyResourceCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<DefinedAcademyResourceCreateOrConnectWithoutLessonInput>;

    @Field(() => DefinedAcademyResourceCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateManyLessonInputEnvelope)
    createMany?: DefinedAcademyResourceCreateManyLessonInputEnvelope;

    @Field(() => [DefinedAcademyResourceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>>;
}
