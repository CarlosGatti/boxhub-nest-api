import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SubcontractorWhereInput } from './subcontractor-where.input';

@InputType()
export class SubcontractorRelationFilter {

    @Field(() => SubcontractorWhereInput, {nullable:true})
    is?: SubcontractorWhereInput;

    @Field(() => SubcontractorWhereInput, {nullable:true})
    isNot?: SubcontractorWhereInput;
}
