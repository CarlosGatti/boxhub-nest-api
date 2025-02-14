import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ThemeWhereInput } from './theme-where.input';

@InputType()
export class ThemeListRelationFilter {

    @Field(() => ThemeWhereInput, {nullable:true})
    every?: ThemeWhereInput;

    @Field(() => ThemeWhereInput, {nullable:true})
    some?: ThemeWhereInput;

    @Field(() => ThemeWhereInput, {nullable:true})
    none?: ThemeWhereInput;
}
