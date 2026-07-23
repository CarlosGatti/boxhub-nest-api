import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateWithoutJourneyInput } from './defined-academy-user-career-profile-create-without-journey.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateOrConnectWithoutJourneyInput } from './defined-academy-user-career-profile-create-or-connect-without-journey.input';
import { DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutJourneyInput } from './defined-academy-user-career-profile-upsert-with-where-unique-without-journey.input';
import { DefinedAcademyUserCareerProfileCreateManyJourneyInputEnvelope } from './defined-academy-user-career-profile-create-many-journey-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';
import { DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutJourneyInput } from './defined-academy-user-career-profile-update-with-where-unique-without-journey.input';
import { DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutJourneyInput } from './defined-academy-user-career-profile-update-many-with-where-without-journey.input';
import { DefinedAcademyUserCareerProfileScalarWhereInput } from './defined-academy-user-career-profile-scalar-where.input';

@InputType()
export class DefinedAcademyUserCareerProfileUpdateManyWithoutJourneyNestedInput {

    @Field(() => [DefinedAcademyUserCareerProfileCreateWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutJourneyInput)
    create?: Array<DefinedAcademyUserCareerProfileCreateWithoutJourneyInput>;

    @Field(() => [DefinedAcademyUserCareerProfileCreateOrConnectWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutJourneyInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerProfileCreateOrConnectWithoutJourneyInput>;

    @Field(() => [DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutJourneyInput)
    upsert?: Array<DefinedAcademyUserCareerProfileUpsertWithWhereUniqueWithoutJourneyInput>;

    @Field(() => DefinedAcademyUserCareerProfileCreateManyJourneyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyJourneyInputEnvelope)
    createMany?: DefinedAcademyUserCareerProfileCreateManyJourneyInputEnvelope;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;

    @Field(() => [DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutJourneyInput)
    update?: Array<DefinedAcademyUserCareerProfileUpdateWithWhereUniqueWithoutJourneyInput>;

    @Field(() => [DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutJourneyInput)
    updateMany?: Array<DefinedAcademyUserCareerProfileUpdateManyWithWhereWithoutJourneyInput>;

    @Field(() => [DefinedAcademyUserCareerProfileScalarWhereInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileScalarWhereInput)
    deleteMany?: Array<DefinedAcademyUserCareerProfileScalarWhereInput>;
}
