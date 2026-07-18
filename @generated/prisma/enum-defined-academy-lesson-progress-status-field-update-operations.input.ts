import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonProgressStatus } from './defined-academy-lesson-progress-status.enum';

@InputType()
export class EnumDefinedAcademyLessonProgressStatusFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyLessonProgressStatus, {nullable:true})
    set?: keyof typeof DefinedAcademyLessonProgressStatus;
}
