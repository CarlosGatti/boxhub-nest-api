import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentCreateManyInput } from './defined-academy-enrollment-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedAcademyEnrollmentArgs {

    @Field(() => [DefinedAcademyEnrollmentCreateManyInput], {nullable:false})
    @Type(() => DefinedAcademyEnrollmentCreateManyInput)
    data!: Array<DefinedAcademyEnrollmentCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
