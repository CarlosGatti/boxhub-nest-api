import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageCreateManyInput } from './defined-academy-career-stage-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyCareerStageArgs {

    @Field(() => [DefinedAcademyCareerStageCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyCareerStageCreateManyInput)
    data!: Array<DefinedAcademyCareerStageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
