import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeAnswerType } from './defined-intake-answer-type.enum';

@InputType()
export class NestedEnumDefinedIntakeAnswerTypeFilter {

    @Field(() => DefinedIntakeAnswerType, {nullable:true})
    equals?: keyof typeof DefinedIntakeAnswerType;

    @Field(() => [DefinedIntakeAnswerType], {nullable:true})
    in?: Array<keyof typeof DefinedIntakeAnswerType>;

    @Field(() => [DefinedIntakeAnswerType], {nullable:true})
    notIn?: Array<keyof typeof DefinedIntakeAnswerType>;

    @Field(() => NestedEnumDefinedIntakeAnswerTypeFilter, {nullable:true})
    not?: NestedEnumDefinedIntakeAnswerTypeFilter;
}
