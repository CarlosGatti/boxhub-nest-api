import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerJourneyCreateWithoutAcademyInput } from './defined-academy-career-journey-create-without-academy.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerJourneyCreateOrConnectWithoutAcademyInput } from './defined-academy-career-journey-create-or-connect-without-academy.input';
import { DefinedAcademyCareerJourneyUpsertWithoutAcademyInput } from './defined-academy-career-journey-upsert-without-academy.input';
import { DefinedAcademyCareerJourneyWhereInput } from './defined-academy-career-journey-where.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyCareerJourneyWhereUniqueInput } from './defined-academy-career-journey-where-unique.input';
import { DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutAcademyInput } from './defined-academy-career-journey-update-to-one-with-where-without-academy.input';

@InputType()
export class DefinedAcademyCareerJourneyUncheckedUpdateOneWithoutAcademyNestedInput {

    @Field(() => DefinedAcademyCareerJourneyCreateWithoutAcademyInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateWithoutAcademyInput)
    create?: DefinedAcademyCareerJourneyCreateWithoutAcademyInput;

    @Field(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutAcademyInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyCreateOrConnectWithoutAcademyInput)
    connectOrCreate?: DefinedAcademyCareerJourneyCreateOrConnectWithoutAcademyInput;

    @Field(() => DefinedAcademyCareerJourneyUpsertWithoutAcademyInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyUpsertWithoutAcademyInput)
    upsert?: DefinedAcademyCareerJourneyUpsertWithoutAcademyInput;

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    disconnect?: DefinedAcademyCareerJourneyWhereInput;

    @Field(() => DefinedAcademyCareerJourneyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereInput)
    delete?: DefinedAcademyCareerJourneyWhereInput;

    @Field(() => DefinedAcademyCareerJourneyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyCareerJourneyWhereUniqueInput, 'id' | 'academyId' | 'academyId_slug'>;

    @Field(() => DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutAcademyInput, {nullable:true})
    @Type(() => DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutAcademyInput)
    update?: DefinedAcademyCareerJourneyUpdateToOneWithWhereWithoutAcademyInput;
}
