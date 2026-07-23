import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCareerStageContentType } from './defined-academy-career-stage-content-type.enum';

@InputType()
export class EnumDefinedAcademyCareerStageContentTypeFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyCareerStageContentType, {nullable:true})
    set?: keyof typeof DefinedAcademyCareerStageContentType;
}
