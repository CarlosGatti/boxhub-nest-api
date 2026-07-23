import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyUserCareerStageCompletionCreateManyInput } from './defined-academy-user-career-stage-completion-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyUserCareerStageCompletionArgs {

    @Field(() => [DefinedAcademyUserCareerStageCompletionCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyUserCareerStageCompletionCreateManyInput)
    data!: Array<DefinedAcademyUserCareerStageCompletionCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
