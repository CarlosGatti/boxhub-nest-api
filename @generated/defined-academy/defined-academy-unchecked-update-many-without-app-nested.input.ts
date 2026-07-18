import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutAppInput } from './defined-academy-create-without-app.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutAppInput } from './defined-academy-create-or-connect-without-app.input';
import { DefinedAcademyUpsertWithWhereUniqueWithoutAppInput } from './defined-academy-upsert-with-where-unique-without-app.input';
import { DefinedAcademyCreateManyAppInputEnvelope } from './defined-academy-create-many-app-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { DefinedAcademyUpdateWithWhereUniqueWithoutAppInput } from './defined-academy-update-with-where-unique-without-app.input';
import { DefinedAcademyUpdateManyWithWhereWithoutAppInput } from './defined-academy-update-many-with-where-without-app.input';
import { DefinedAcademyScalarWhereInput } from './defined-academy-scalar-where.input';

@InputType()
export class DefinedAcademyUncheckedUpdateManyWithoutAppNestedInput {

    @Field(() => [DefinedAcademyCreateWithoutAppInput], {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutAppInput)
    create?: Array<DefinedAcademyCreateWithoutAppInput>;

    @Field(() => [DefinedAcademyCreateOrConnectWithoutAppInput], {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutAppInput)
    connectOrCreate?: Array<DefinedAcademyCreateOrConnectWithoutAppInput>;

    @Field(() => [DefinedAcademyUpsertWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => DefinedAcademyUpsertWithWhereUniqueWithoutAppInput)
    upsert?: Array<DefinedAcademyUpsertWithWhereUniqueWithoutAppInput>;

    @Field(() => DefinedAcademyCreateManyAppInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyCreateManyAppInputEnvelope)
    createMany?: DefinedAcademyCreateManyAppInputEnvelope;

    @Field(() => [DefinedAcademyWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [DefinedAcademyWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [DefinedAcademyWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [DefinedAcademyWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>>;

    @Field(() => [DefinedAcademyUpdateWithWhereUniqueWithoutAppInput], {nullable:true})
    @Type(() => DefinedAcademyUpdateWithWhereUniqueWithoutAppInput)
    update?: Array<DefinedAcademyUpdateWithWhereUniqueWithoutAppInput>;

    @Field(() => [DefinedAcademyUpdateManyWithWhereWithoutAppInput], {nullable:true})
    @Type(() => DefinedAcademyUpdateManyWithWhereWithoutAppInput)
    updateMany?: Array<DefinedAcademyUpdateManyWithWhereWithoutAppInput>;

    @Field(() => [DefinedAcademyScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyScalarWhereInput)
    deleteMany?: Array<DefinedAcademyScalarWhereInput>;
}
