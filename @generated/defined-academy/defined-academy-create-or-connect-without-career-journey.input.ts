import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedAcademyWhereUniqueInput } from './defined-academy-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutCareerJourneyInput } from './defined-academy-create-without-career-journey.input';

@InputType()
export class DefinedAcademyCreateOrConnectWithoutCareerJourneyInput {

    @Field(() => DefinedAcademyWhereUniqueInput, {nullable:false})
    @Type(() => DefinedAcademyWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedAcademyWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedAcademyCreateWithoutCareerJourneyInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutCareerJourneyInput)
    create!: DefinedAcademyCreateWithoutCareerJourneyInput;
}
