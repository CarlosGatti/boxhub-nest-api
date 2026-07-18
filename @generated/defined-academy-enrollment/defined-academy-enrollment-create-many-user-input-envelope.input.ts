import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCreateManyUserInput } from './defined-academy-enrollment-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedAcademyEnrollmentCreateManyUserInputEnvelope {

    @Field(() => [DefinedAcademyEnrollmentCreateManyUserInput], {nullable:false})
    @Type(() => DefinedAcademyEnrollmentCreateManyUserInput)
    data!: Array<DefinedAcademyEnrollmentCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
