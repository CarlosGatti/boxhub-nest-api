import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationWhereInput } from './publication-where.input';

@InputType()
export class PublicationRelationFilter {

    @Field(() => PublicationWhereInput, {nullable:true})
    is?: PublicationWhereInput;

    @Field(() => PublicationWhereInput, {nullable:true})
    isNot?: PublicationWhereInput;
}
