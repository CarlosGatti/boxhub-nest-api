import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceUpdateWithoutCareerStageLinksInput } from './defined-academy-resource-update-without-career-stage-links.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceCreateWithoutCareerStageLinksInput } from './defined-academy-resource-create-without-career-stage-links.input';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';

@InputType()
export class DefinedAcademyResourceUpsertWithoutCareerStageLinksInput {

    @Field(() => DefinedAcademyResourceUpdateWithoutCareerStageLinksInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateWithoutCareerStageLinksInput)
    update!: DefinedAcademyResourceUpdateWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyResourceCreateWithoutCareerStageLinksInput, {nullable:false})
    @Type(() => DefinedAcademyResourceCreateWithoutCareerStageLinksInput)
    create!: DefinedAcademyResourceCreateWithoutCareerStageLinksInput;

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    where?: DefinedAcademyResourceWhereInput;
}
