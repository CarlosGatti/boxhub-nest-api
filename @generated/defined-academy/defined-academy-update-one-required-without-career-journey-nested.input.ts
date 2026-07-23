import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCreateWithoutCareerJourneyInput } from './defined-academy-create-without-career-journey.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateOrConnectWithoutCareerJourneyInput } from './defined-academy-create-or-connect-without-career-journey.input';
import { DefinedAcademyUpsertWithoutCareerJourneyInput } from './defined-academy-upsert-without-career-journey.input';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { DefinedAcademyUpdateToOneWithWhereWithoutCareerJourneyInput } from './defined-academy-update-to-one-with-where-without-career-journey.input';

@InputType()
export class DefinedAcademyUpdateOneRequiredWithoutCareerJourneyNestedInput {

    @Field(() => DefinedAcademyCreateWithoutCareerJourneyInput, {nullable:true})
    @Type(() => DefinedAcademyCreateWithoutCareerJourneyInput)
    create?: DefinedAcademyCreateWithoutCareerJourneyInput;

    @Field(() => DefinedAcademyCreateOrConnectWithoutCareerJourneyInput, {nullable:true})
    @Type(() => DefinedAcademyCreateOrConnectWithoutCareerJourneyInput)
    connectOrCreate?: DefinedAcademyCreateOrConnectWithoutCareerJourneyInput;

    @Field(() => DefinedAcademyUpsertWithoutCareerJourneyInput, {nullable:true})
    @Type(() => DefinedAcademyUpsertWithoutCareerJourneyInput)
    upsert?: DefinedAcademyUpsertWithoutCareerJourneyInput;

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:true})
    @Type(() => DefinedAcademyWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyUpdateToOneWithWhereWithoutCareerJourneyInput, {nullable:true})
    @Type(() => DefinedAcademyUpdateToOneWithWhereWithoutCareerJourneyInput)
    update?: DefinedAcademyUpdateToOneWithWhereWithoutCareerJourneyInput;
}
