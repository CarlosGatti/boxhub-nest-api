import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageUpdateWithoutContentLinksInput } from './defined-academy-career-stage-update-without-content-links.input';

@InputType()
export class DefinedAcademyCareerStageUpdateToOneWithWhereWithoutContentLinksInput {

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    where?: DefinedAcademyCareerStageWhereInput;

    @Field(() => DefinedAcademyCareerStageUpdateWithoutContentLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageUpdateWithoutContentLinksInput)
    data!: DefinedAcademyCareerStageUpdateWithoutContentLinksInput;
}
