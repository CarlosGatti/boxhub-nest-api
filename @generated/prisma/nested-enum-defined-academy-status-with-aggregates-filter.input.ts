import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyStatus } from './defined-academy-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumDefinedAcademyStatusFilter } from './nested-enum-defined-academy-status-filter.input';

@InputType()
export class NestedEnumDefinedAcademyStatusWithAggregatesFilter {

    @Field(() => DefinedAcademyStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyStatus;

    @Field(() => [DefinedAcademyStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyStatus>;

    @Field(() => [DefinedAcademyStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyStatus>;

    @Field(() => NestedEnumDefinedAcademyStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumDefinedAcademyStatusFilter, {nullable:true})
    _min?: NestedEnumDefinedAcademyStatusFilter;

    @Field(() => NestedEnumDefinedAcademyStatusFilter, {nullable:true})
    _max?: NestedEnumDefinedAcademyStatusFilter;
}
