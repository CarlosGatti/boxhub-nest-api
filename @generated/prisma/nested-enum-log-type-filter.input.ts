import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogType } from './log-type.enum';

@InputType()
export class NestedEnumLogTypeFilter {

    @Field(() => LogType, {nullable:true})
    equals?: keyof typeof LogType;

    @Field(() => [LogType], {nullable:true})
    in?: Array<keyof typeof LogType>;

    @Field(() => [LogType], {nullable:true})
    notIn?: Array<keyof typeof LogType>;

    @Field(() => NestedEnumLogTypeFilter, {nullable:true})
    not?: NestedEnumLogTypeFilter;
}
