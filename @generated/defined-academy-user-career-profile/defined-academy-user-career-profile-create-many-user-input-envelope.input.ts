import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateManyUserInput } from './defined-academy-user-career-profile-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyUserCareerProfileCreateManyUserInputEnvelope {

    @Field(() => [DefinedAcademyUserCareerProfileCreateManyUserInput], {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyUserInput)
    data!: Array<DefinedAcademyUserCareerProfileCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
