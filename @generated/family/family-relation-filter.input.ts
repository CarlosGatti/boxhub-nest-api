import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FamilyWhereInput } from './family-where.input';

@InputType()
export class FamilyRelationFilter {

    @Field(() => FamilyWhereInput, {nullable:true})
    is?: FamilyWhereInput;

    @Field(() => FamilyWhereInput, {nullable:true})
    isNot?: FamilyWhereInput;
}
