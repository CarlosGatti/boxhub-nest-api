import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentStatus } from './defined-academy-enrollment-status.enum';

@InputType()
export class EnumDefinedAcademyEnrollmentStatusFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyEnrollmentStatus, {nullable:true})
    set?: keyof typeof DefinedAcademyEnrollmentStatus;
}
