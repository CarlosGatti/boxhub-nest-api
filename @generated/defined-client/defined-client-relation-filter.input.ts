import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientWhereInput } from './defined-client-where.input';

@InputType()
export class DefinedClientRelationFilter {

    @Field(() => DefinedClientWhereInput, {nullable:true})
    is?: DefinedClientWhereInput;

    @Field(() => DefinedClientWhereInput, {nullable:true})
    isNot?: DefinedClientWhereInput;
}
