import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerCreateWithoutAcademyInput } from './defined-academy-partner-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyPartnerCreateOrConnectWithoutAcademyInput } from './defined-academy-partner-create-or-connect-without-academy.input';
import { DefinedAcademyPartnerUpsertWithWhereUniqueWithoutAcademyInput } from './defined-academy-partner-upsert-with-where-unique-without-academy.input';
import { DefinedAcademyPartnerCreateManyAcademyInputEnvelope } from './defined-academy-partner-create-many-academy-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyPartnerWhereUniqueInput } from './defined-academy-partner-where-unique.input';
import { DefinedAcademyPartnerUpdateWithWhereUniqueWithoutAcademyInput } from './defined-academy-partner-update-with-where-unique-without-academy.input';
import { DefinedAcademyPartnerUpdateManyWithWhereWithoutAcademyInput } from './defined-academy-partner-update-many-with-where-without-academy.input';
import { DefinedAcademyPartnerScalarWhereInput } from './defined-academy-partner-scalar-where.input';

@InputType()
export class DefinedAcademyPartnerUncheckedUpdateManyWithoutAcademyNestedInput {

    @Field(() => [DefinedAcademyPartnerCreateWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateWithoutAcademyInput)
    create?: Array<DefinedAcademyPartnerCreateWithoutAcademyInput>;

    @Field(() => [DefinedAcademyPartnerCreateOrConnectWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: Array<DefinedAcademyPartnerCreateOrConnectWithoutAcademyInput>;

    @Field(() => [DefinedAcademyPartnerUpsertWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerUpsertWithWhereUniqueWithoutAcademyInput)
    upsert?: Array<DefinedAcademyPartnerUpsertWithWhereUniqueWithoutAcademyInput>;

    @Field(() => DefinedAcademyPartnerCreateManyAcademyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyPartnerCreateManyAcademyInputEnvelope)
    createMany?: DefinedAcademyPartnerCreateManyAcademyInputEnvelope;

    @Field(() => [DefinedAcademyPartnerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyPartnerWhereUniqueInput, 'id' | 'academyId_slug'>>;

    @Field(() => [DefinedAcademyPartnerUpdateWithWhereUniqueWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerUpdateWithWhereUniqueWithoutAcademyInput)
    update?: Array<DefinedAcademyPartnerUpdateWithWhereUniqueWithoutAcademyInput>;

    @Field(() => [DefinedAcademyPartnerUpdateManyWithWhereWithoutAcademyInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerUpdateManyWithWhereWithoutAcademyInput)
    updateMany?: Array<DefinedAcademyPartnerUpdateManyWithWhereWithoutAcademyInput>;

    @Field(() => [DefinedAcademyPartnerScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyPartnerScalarWhereInput)
    deleteMany?: Array<DefinedAcademyPartnerScalarWhereInput>;
}
