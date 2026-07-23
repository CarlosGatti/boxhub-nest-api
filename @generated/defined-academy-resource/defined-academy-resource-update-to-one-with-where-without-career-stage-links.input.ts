import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyResourceWhereInput } from './defined-academy-resource-where.input';
import { Type } from 'class-transformer';
import { DefinedAcademyResourceUpdateWithoutCareerStageLinksInput } from './defined-academy-resource-update-without-career-stage-links.input';

@InputType()
export class DefinedAcademyResourceUpdateToOneWithWhereWithoutCareerStageLinksInput {

    @Field(() => DefinedAcademyResourceWhereInput, {nullable:true})
    @Type(() => DefinedAcademyResourceWhereInput)
    where?: DefinedAcademyResourceWhereInput;

    @Field(() => DefinedAcademyResourceUpdateWithoutCareerStageLinksInput, {nullable:false})
    @Type(() => DefinedAcademyResourceUpdateWithoutCareerStageLinksInput)
    data!: DefinedAcademyResourceUpdateWithoutCareerStageLinksInput;
}
