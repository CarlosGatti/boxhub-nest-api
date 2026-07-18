import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkStatus } from './defined-academy-short-link-status.enum';
import { NestedEnumDefinedAcademyShortLinkStatusFilter } from './nested-enum-defined-academy-short-link-status-filter.input';

@InputType()
export class EnumDefinedAcademyShortLinkStatusFilter {

    @Field(() => DefinedAcademyShortLinkStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyShortLinkStatus;

    @Field(() => [DefinedAcademyShortLinkStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyShortLinkStatus>;

    @Field(() => [DefinedAcademyShortLinkStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyShortLinkStatus>;

    @Field(() => NestedEnumDefinedAcademyShortLinkStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyShortLinkStatusFilter;
}
