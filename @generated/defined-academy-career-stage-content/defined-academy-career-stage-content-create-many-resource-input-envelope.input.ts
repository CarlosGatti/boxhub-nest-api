import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentCreateManyResourceInput } from './defined-academy-career-stage-content-create-many-resource.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyCareerStageContentCreateManyResourceInputEnvelope {

    @Field(() => [DefinedAcademyCareerStageContentCreateManyResourceInput], {nullable:false})
    @Type(() => DefinedAcademyCareerStageContentCreateManyResourceInput)
    data!: Array<DefinedAcademyCareerStageContentCreateManyResourceInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
