import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogAction } from './log-action.enum';
import { NestedEnumLogActionFilter } from './nested-enum-log-action-filter.input';

@InputType()
export class EnumLogActionFilter {

    @Field(() => LogAction, {nullable:true})
    equals?: keyof typeof LogAction;

    @Field(() => [LogAction], {nullable:true})
    in?: Array<keyof typeof LogAction>;

    @Field(() => [LogAction], {nullable:true})
    notIn?: Array<keyof typeof LogAction>;

    @Field(() => NestedEnumLogActionFilter, {nullable:true})
    not?: NestedEnumLogActionFilter;
}
