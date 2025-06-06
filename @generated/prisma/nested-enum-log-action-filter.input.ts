import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogAction } from './log-action.enum';

@InputType()
export class NestedEnumLogActionFilter {

    @Field(() => LogAction, {nullable:true})
    equals?: keyof typeof LogAction;

    @Field(() => [LogAction], {nullable:true})
    in?: Array<keyof typeof LogAction>;

    @Field(() => [LogAction], {nullable:true})
    notIn?: Array<keyof typeof LogAction>;

    @Field(() => NestedEnumLogActionFilter, {nullable:true})
    not?: NestedEnumLogActionFilter;
}
