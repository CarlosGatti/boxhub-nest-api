import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectWhereInput } from './defined-project-where.input';

@InputType()
export class DefinedProjectRelationFilter {

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    is?: DefinedProjectWhereInput;

    @Field(() => DefinedProjectWhereInput, {nullable:true})
    isNot?: DefinedProjectWhereInput;
}
