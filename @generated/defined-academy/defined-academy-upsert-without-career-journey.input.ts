import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUpdateWithoutCareerJourneyInput } from './defined-academy-update-without-career-journey.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCreateWithoutCareerJourneyInput } from './defined-academy-create-without-career-journey.input';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';

@InputType()
export class DefinedAcademyUpsertWithoutCareerJourneyInput {

    @Field(() => DefinedAcademyUpdateWithoutCareerJourneyInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutCareerJourneyInput)
    update!: DefinedAcademyUpdateWithoutCareerJourneyInput;

    @Field(() => DefinedAcademyCreateWithoutCareerJourneyInput, {nullable:false})
    @Type(() => DefinedAcademyCreateWithoutCareerJourneyInput)
    create!: DefinedAcademyCreateWithoutCareerJourneyInput;

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;
}
