import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ConstructionLogWhereInput } from './construction-log-where.input';

@InputType()
export class ConstructionLogListRelationFilter {

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    every?: ConstructionLogWhereInput;

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    some?: ConstructionLogWhereInput;

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    none?: ConstructionLogWhereInput;
}
