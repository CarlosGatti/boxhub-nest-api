import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyStatus } from './defined-academy-status.enum';

@InputType()
export class NestedEnumDefinedAcademyStatusFilter {

    @Field(() => DefinedAcademyStatus, {nullable:true})
    equals?: keyof typeof DefinedAcademyStatus;

    @Field(() => [DefinedAcademyStatus], {nullable:true})
    in?: Array<keyof typeof DefinedAcademyStatus>;

    @Field(() => [DefinedAcademyStatus], {nullable:true})
    notIn?: Array<keyof typeof DefinedAcademyStatus>;

    @Field(() => NestedEnumDefinedAcademyStatusFilter, {nullable:true})
    not?: NestedEnumDefinedAcademyStatusFilter;
}
