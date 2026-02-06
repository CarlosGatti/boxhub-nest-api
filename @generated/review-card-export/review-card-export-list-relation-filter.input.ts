import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ReviewCardExportWhereInput } from './review-card-export-where.input';

@InputType()
export class ReviewCardExportListRelationFilter {

    @Field(() => ReviewCardExportWhereInput, {nullable:true})
    every?: ReviewCardExportWhereInput;

    @Field(() => ReviewCardExportWhereInput, {nullable:true})
    some?: ReviewCardExportWhereInput;

    @Field(() => ReviewCardExportWhereInput, {nullable:true})
    none?: ReviewCardExportWhereInput;
}
