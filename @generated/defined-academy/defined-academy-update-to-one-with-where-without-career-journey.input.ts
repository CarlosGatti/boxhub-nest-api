import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyWhereInput } from './defined-academy-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyUpdateWithoutCareerJourneyInput } from './defined-academy-update-without-career-journey.input';

@InputType()
export class DefinedAcademyUpdateToOneWithWhereWithoutCareerJourneyInput {

    @Field(() => DefinedAcademyWhereInput, {nullable:true})
    @Type(() => DefinedAcademyWhereInput)
    where?: DefinedAcademyWhereInput;

    @Field(() => DefinedAcademyUpdateWithoutCareerJourneyInput, {nullable:false})
    @Type(() => DefinedAcademyUpdateWithoutCareerJourneyInput)
    data!: DefinedAcademyUpdateWithoutCareerJourneyInput;
}
