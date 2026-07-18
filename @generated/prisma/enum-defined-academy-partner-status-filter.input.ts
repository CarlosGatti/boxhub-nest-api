import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerStatus } from './defined-academy-partner-status.enum';
import { NestedEnumDefinedAcademyPartnerStatusFilter } from './nested-enum-defined-academy-partner-status-filter.input';

@InputType()
export class EnumDefinedAcademyPartnerStatusFilter {

    @Field(() => DefinedAcademyPartnerStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyPartnerStatus;

    @Field(() => [DefinedAcademyPartnerStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyPartnerStatus>;

    @Field(() => [DefinedAcademyPartnerStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyPartnerStatus>;

    @Field(() => NestedEnumDefinedAcademyPartnerStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyPartnerStatusFilter;
}
