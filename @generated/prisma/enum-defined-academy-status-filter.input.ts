import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyStatus } from './defined-academy-status.enum';
import { NestedEnumDefinedAcademyStatusFilter } from './nested-enum-defined-academy-status-filter.input';

@InputType()
export class EnumDefinedAcademyStatusFilter {

    @Field(() => DefinedAcademyStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyStatus;

    @Field(() => [DefinedAcademyStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyStatus>;

    @Field(() => [DefinedAcademyStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyStatus>;

    @Field(() => NestedEnumDefinedAcademyStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyStatusFilter;
}
