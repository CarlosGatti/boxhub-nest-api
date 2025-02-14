import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationWhereInput } from './publication-where.input';

@InputType()
export class PublicationListRelationFilter {

    @Field(() => PublicationWhereInput, {nullable:true})
    every?: PublicationWhereInput;

    @Field(() => PublicationWhereInput, {nullable:true})
    some?: PublicationWhereInput;

    @Field(() => PublicationWhereInput, {nullable:true})
    none?: PublicationWhereInput;
}
