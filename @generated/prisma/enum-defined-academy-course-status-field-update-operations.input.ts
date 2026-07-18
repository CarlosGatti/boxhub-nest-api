import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyCourseStatus } from './defined-academy-course-status.enum';

@InputType()
export class EnumDefinedAcademyCourseStatusFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyCourseStatus, {nullable:true})
    set?: keyof typeof DefinedAcademyCourseStatus;
}
