import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyEnrollmentStatus } from './defined-academy-enrollment-status.enum';
import { NestedEnumDefinedAcademyEnrollmentStatusWithAggregatesFilter } from './nested-enum-defined-academy-enrollment-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyEnrollmentStatusFilter } from './nested-enum-defined-academy-enrollment-status-filter.input';

@InputType()
export class EnumDefinedAcademyEnrollmentStatusWithAggregatesFilter {

    @Field(() => DefinedAcademyEnrollmentStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyEnrollmentStatus;

    @Field(() => [DefinedAcademyEnrollmentStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyEnrollmentStatus>;

    @Field(() => [DefinedAcademyEnrollmentStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyEnrollmentStatus>;

    @Field(() => NestedEnumDefinedAcademyEnrollmentStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyEnrollmentStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyEnrollmentStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyEnrollmentStatusFilter;

    @Field(() => NestedEnumDefinedAcademyEnrollmentStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyEnrollmentStatusFilter;
}
