import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateManyJourneyInput } from './defined-academy-user-career-profile-create-many-journey.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyUserCareerProfileCreateManyJourneyInputEnvelope {

    @Field(() => [DefinedAcademyUserCareerProfileCreateManyJourneyInput], {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyJourneyInput)
    data!: Array<DefinedAcademyUserCareerProfileCreateManyJourneyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
