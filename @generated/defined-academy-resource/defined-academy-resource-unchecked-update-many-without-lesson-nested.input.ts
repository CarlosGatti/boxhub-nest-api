import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutLessonInput } from './defined-academy-resource-create-without-lesson.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutLessonInput } from './defined-academy-resource-create-or-connect-without-lesson.input';
import { DefinedAcademyResourceUpsertWithWhereUniqueWithoutLessonInput } from './defined-academy-resource-upsert-with-where-unique-without-lesson.input';
import { DefinedAcademyResourceCreateManyLessonInputEnvelope } from './defined-academy-resource-create-many-lesson-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { DefinedAcademyResourceUpdateWithWhereUniqueWithoutLessonInput } from './defined-academy-resource-update-with-where-unique-without-lesson.input';
import { DefinedAcademyResourceUpdateManyWithWhereWithoutLessonInput } from './defined-academy-resource-update-many-with-where-without-lesson.input';
import { DefinedAcademyResourceScalarWhereInput } from './defined-academy-resource-scalar-where.input';

@InputType()
export class DefinedAcademyResourceUncheckedUpdateManyWithoutLessonNestedInput {

    @Field(() => [DefinedAcademyResourceCreateWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutLessonInput)
    create?: Array<DefinedAcademyResourceCreateWithoutLessonInput>;

    @Field(() => [DefinedAcademyResourceCreateOrConnectWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutLessonInput)
    connectOrCreate?: Array<DefinedAcademyResourceCreateOrConnectWithoutLessonInput>;

    @Field(() => [DefinedAcademyResourceUpsertWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyResourceUpsertWithWhereUniqueWithoutLessonInput)
    upsert?: Array<DefinedAcademyResourceUpsertWithWhereUniqueWithoutLessonInput>;

    @Field(() => DefinedAcademyResourceCreateManyLessonInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateManyLessonInputEnvelope)
    createMany?: DefinedAcademyResourceCreateManyLessonInputEnvelope;

    @Field(() => [DefinedAcademyResourceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyResourceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyResourceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyResourceWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyResourceWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyResourceWhereUniqueInput, 'id'>>;

    @Field(() => [DefinedAcademyResourceUpdateWithWhereUniqueWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyResourceUpdateWithWhereUniqueWithoutLessonInput)
    update?: Array<DefinedAcademyResourceUpdateWithWhereUniqueWithoutLessonInput>;

    @Field(() => [DefinedAcademyResourceUpdateManyWithWhereWithoutLessonInput], {nullable:true})
    @Type(() => DefinedAcademyResourceUpdateManyWithWhereWithoutLessonInput)
    updateMany?: Array<DefinedAcademyResourceUpdateManyWithWhereWithoutLessonInput>;

    @Field(() => [DefinedAcademyResourceScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyResourceScalarWhereInput)
    deleteMany?: Array<DefinedAcademyResourceScalarWhereInput>;
}
