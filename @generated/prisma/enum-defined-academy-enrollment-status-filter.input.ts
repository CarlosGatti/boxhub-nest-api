import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentStatus } from './defined-academy-enrollment-status.enum';
import { NestedEnumDefinedAcademyEnrollmentStatusFilter } from './nested-enum-defined-academy-enrollment-status-filter.input';

@InputType()
export class EnumDefinedAcademyEnrollmentStatusFilter {

    @Field(() => DefinedAcademyEnrollmentStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyEnrollmentStatus;

    @Field(() => [DefinedAcademyEnrollmentStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyEnrollmentStatus>;

    @Field(() => [DefinedAcademyEnrollmentStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyEnrollmentStatus>;

    @Field(() => NestedEnumDefinedAcademyEnrollmentStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyEnrollmentStatusFilter;
}
