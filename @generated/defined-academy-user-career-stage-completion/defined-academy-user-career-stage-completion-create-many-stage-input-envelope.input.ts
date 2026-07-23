import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionCreateManyStageInput } from './defined-academy-user-career-stage-completion-create-many-stage.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyUserCareerStageCompletionCreateManyStageInputEnvelope {

    @Field(() => [DefinedAcademyUserCareerStageCompletionCreateManyStageInput], {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateManyStageInput)
    data!: Array<DefinedAcademyUserCareerStageCompletionCreateManyStageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
