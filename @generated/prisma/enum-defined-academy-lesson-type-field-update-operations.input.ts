import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyLessonType } from './defined-academy-lesson-type.enum';

@InputType()
export class EnumDefinedAcademyLessonTypeFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyLessonType, {nullable:true})
    set?: keyof typeof DefinedAcademyLessonType;
}
