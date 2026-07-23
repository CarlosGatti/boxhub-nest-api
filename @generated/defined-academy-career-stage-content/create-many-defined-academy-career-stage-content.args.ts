import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCreateManyInput } from './defined-academy-career-stage-content-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyCareerStageContentArgs {

    @Field(() => [DefinedAcademyCareerStageContentCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentCreateManyInput)
    data!: Array<DefinedAcademyCareerStageContentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
