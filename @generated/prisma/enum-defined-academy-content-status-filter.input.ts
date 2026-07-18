import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyContentStatus } from './defined-academy-content-status.enum';
import { NestedEnumDefinedAcademyContentStatusFilter } from './nested-enum-defined-academy-content-status-filter.input';

@InputType()
export class EnumDefinedAcademyContentStatusFilter {

    @Field(() => DefinedAcademyContentStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyContentStatus;

    @Field(() => [DefinedAcademyContentStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyContentStatus>;

    @Field(() => [DefinedAcademyContentStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyContentStatus>;

    @Field(() => NestedEnumDefinedAcademyContentStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyContentStatusFilter;
}
