import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialEntryWhereInput } from './material-entry-where.input';

@InputType()
export class MaterialEntryListRelationFilter {

    @Field(() => MaterialEntryWhereInput, {nullable:true})
    every?: MaterialEntryWhereInput;

    @Field(() => MaterialEntryWhereInput, {nullable:true})
    some?: MaterialEntryWhereInput;

    @Field(() => MaterialEntryWhereInput, {nullable:true})
    none?: MaterialEntryWhereInput;
}
