import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseVisibility } from './defined-academy-course-visibility.enum';

@InputType()
export class EnumDefinedAcademyCourseVisibilityFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyCourseVisibility, {nullable:true})
    set?: keyof typeof DefinedAcademyCourseVisibility;
}
