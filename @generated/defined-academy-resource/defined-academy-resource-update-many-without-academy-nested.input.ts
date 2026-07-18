import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceCreateWithoutAcademyInput } from './defined-academy-resource-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateOrConnectWithoutAcademyInput } from './defined-academy-resource-create-or-connect-without-academy.input';
import { DefinedAcademyResourceUpsertWithWhereUniqueWithoutAcademyInput } from './defined-academy-resource-upsert-with-where-unique-without-academy.input';
import { DefinedAcademyResourceCreateManyAcademyInputEnvelope } from './defined-academy-resource-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyResourceWhereUniqueInput } from './defined-academy-resource-where-unique.input';
import { DefinedAcademyResourceUpdateWithWhereUniqueWithoutAcademyInput } from './defined-academy-resource-update-with-where-unique-without-academy.input';
import { DefinedAcademyResourceUpdateManyWithWhereWithoutAcademyInput } from './defined-academy-resource-update-many-with-where-without-academy.input';
import { DefinedAcademyResourceScalarWhereInput } from './defined-academy-resource-scalar-where.input';

@InputType()
export class DefinedAcademyResourceUpdateManyWithoutAcademyNestedInput {

    @Field(() => [DefinedAcademyResourceCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyResourceCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyResourceCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyResourceCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyResourceCreateOrConnectWithoutAcademyInput>;

    @Field(() => [DefinedAcademyResourceUpsertWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyResourceUpsertWithWhereUniqueWithoutAcademyInput)
    upsert?: Array<DefinedAcademyResourceUpsertWithWhereUniqueWithoutAcademyInput>;

    @Field(() => DefinedAcademyResourceCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyResourceCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyResourceCreateManyAcademyInputEnvelope;

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

    @Field(() => [DefinedAcademyResourceUpdateWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyResourceUpdateWithWhereUniqueWithoutAcademyInput)
    update?: Array<DefinedAcademyResourceUpdateWithWhereUniqueWithoutAcademyInput>;

    @Field(() => [DefinedAcademyResourceUpdateManyWithWhereWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyResourceUpdateManyWithWhereWithoutAcademyInput)
    updateMany?: Array<DefinedAcademyResourceUpdateManyWithWhereWithoutAcademyInput>;

    @Field(() => [DefinedAcademyResourceScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyResourceScalarWhereInput)
    deleteMany?: Array<DefinedAcademyResourceScalarWhereInput>;
}
