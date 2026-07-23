import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateWithoutJourneyInput } from './defined-academy-user-career-profile-create-without-journey.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUserCareerProfileCreateOrConnectWithoutJourneyInput } from './defined-academy-user-career-profile-create-or-connect-without-journey.input';
import { DefinedAcademyUserCareerProfileCreateManyJourneyInputEnvelope } from './defined-academy-user-career-profile-create-many-journey-input-envelope.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyUserCareerProfileWhereUniqueInput } from './defined-academy-user-career-profile-where-unique.input';

@InputType()
export class DefinedAcademyUserCareerProfileUncheckedCreateNestedManyWithoutJourneyInput {

    @Field(() => [DefinedAcademyUserCareerProfileCreateWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateWithoutJourneyInput)
    create?: Array<DefinedAcademyUserCareerProfileCreateWithoutJourneyInput>;

    @Field(() => [DefinedAcademyUserCareerProfileCreateOrConnectWithoutJourneyInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateOrConnectWithoutJourneyInput)
    connectOrCreate?: Array<DefinedAcademyUserCareerProfileCreateOrConnectWithoutJourneyInput>;

    @Field(() => DefinedAcademyUserCareerProfileCreateManyJourneyInputEnvelope, {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyJourneyInputEnvelope)
    createMany?: DefinedAcademyUserCareerProfileCreateManyJourneyInputEnvelope;

    @Field(() => [DefinedAcademyUserCareerProfileWhereUniqueInput], {nullable:true})
    @Type(() => DefinedAcademyUserCareerProfileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<DefinedAcademyUserCareerProfileWhereUniqueInput, 'id' | 'userId_academyId'>>;
}
