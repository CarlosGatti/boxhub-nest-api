import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateManyAcademyInput } from './defined-academy-user-career-profile-create-many-academy.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyUserCareerProfileCreateManyAcademyInputEnvelope {

    @Field(() => [DefinedAcademyUserCareerProfileCreateManyAcademyInput], {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyAcademyInput)
    data!: Array<DefinedAcademyUserCareerProfileCreateManyAcademyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
