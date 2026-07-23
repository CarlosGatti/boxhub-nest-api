import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionCreateManyProfileInput } from './defined-academy-user-career-stage-completion-create-many-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyUserCareerStageCompletionCreateManyProfileInputEnvelope {

    @Field(() => [DefinedAcademyUserCareerStageCompletionCreateManyProfileInput], {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateManyProfileInput)
    data!: Array<DefinedAcademyUserCareerStageCompletionCreateManyProfileInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
