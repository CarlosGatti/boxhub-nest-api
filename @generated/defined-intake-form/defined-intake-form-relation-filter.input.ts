import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedIntakeFormWhereInput } from './defined-intake-form-where.input';

@InputType()
export class DefinedIntakeFormRelationFilter {

    @Field(() => DefinedIntakeFormWhereInput, {nullable:true})
    is?: DefinedIntakeFormWhereInput;

    @Field(() => DefinedIntakeFormWhereInput, {nullable:true})
    isNot?: DefinedIntakeFormWhereInput;
}
