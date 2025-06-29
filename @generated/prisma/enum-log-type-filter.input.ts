import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogType } from './log-type.enum';
import { NestedEnumLogTypeFilter } from './nested-enum-log-type-filter.input';

@InputType()
export class EnumLogTypeFilter {

    @Field(() => LogType, {nullable:true})
    equals?: keyof typeof LogType;

    @Field(() => [LogType], {nullable:true})
    in?: Array<keyof typeof LogType>;

    @Field(() => [LogType], {nullable:true})
    notIn?: Array<keyof typeof LogType>;

    @Field(() => NestedEnumLogTypeFilter, {nullable:true})
    not?: NestedEnumLogTypeFilter;
}
