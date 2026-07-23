import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCreateManyStageInput } from './defined-academy-career-stage-content-create-many-stage.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyCareerStageContentCreateManyStageInputEnvelope {

    @Field(() => [DefinedAcademyCareerStageContentCreateManyStageInput], {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentCreateManyStageInput)
    data!: Array<DefinedAcademyCareerStageContentCreateManyStageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
