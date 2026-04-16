import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientType } from './defined-client-type.enum';
import { NestedEnumDefinedClientTypeFilter } from './nested-enum-defined-client-type-filter.input';

@InputType()
export class EnumDefinedClientTypeFilter {

    @Field(() => DefinedClientType, {nullable:true})
    equals?: keyof typeof DefinedClientType;

    @Field(() => [DefinedClientType], {nullable:true})
    in?: Array<keyof typeof DefinedClientType>;

    @Field(() => [DefinedClientType], {nullable:true})
    notIn?: Array<keyof typeof DefinedClientType>;

    @Field(() => NestedEnumDefinedClientTypeFilter, {nullable:true})
    not?: NestedEnumDefinedClientTypeFilter;
}
