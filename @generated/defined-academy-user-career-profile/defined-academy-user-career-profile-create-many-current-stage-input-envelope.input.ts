import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerProfileCreateManyCurrentStageInput } from './defined-academy-user-career-profile-create-many-current-stage.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyUserCareerProfileCreateManyCurrentStageInputEnvelope {

    @Field(() => [DefinedAcademyUserCareerProfileCreateManyCurrentStageInput], {nullable:false})
    @Type(() => DefinedAcademyUserCareerProfileCreateManyCurrentStageInput)
    data!: Array<DefinedAcademyUserCareerProfileCreateManyCurrentStageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
