import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageUpdateWithoutContentLinksInput } from './defined-academy-career-stage-update-without-content-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyCareerStageCreateWithoutContentLinksInput } from './defined-academy-career-stage-create-without-content-links.input';
import { DefinedAcademyCareerStageWhereInput } from './defined-academy-career-stage-where.input';

@InputType()
export class DefinedAcademyCareerStageUpsertWithoutContentLinksInput {

    @Field(() => DefinedAcademyCareerStageUpdateWithoutContentLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageUpdateWithoutContentLinksInput)
    update!: DefinedAcademyCareerStageUpdateWithoutContentLinksInput;

    @Field(() => DefinedAcademyCareerStageCreateWithoutContentLinksInput, {nullable:false})
    @Type(() => DefinedAcademyCareerStageCreateWithoutContentLinksInput)
    create!: DefinedAcademyCareerStageCreateWithoutContentLinksInput;

    @Field(() => DefinedAcademyCareerStageWhereInput, {nullable:true})
    @Type(() => DefinedAcademyCareerStageWhereInput)
    where?: DefinedAcademyCareerStageWhereInput;
}
