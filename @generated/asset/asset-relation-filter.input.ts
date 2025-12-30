import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AssetWhereInput } from './asset-where.input';

@InputType()
export class AssetRelationFilter {

    @Field(() => AssetWhereInput, {nullable:true})
    is?: AssetWhereInput;

    @Field(() => AssetWhereInput, {nullable:true})
    isNot?: AssetWhereInput;
}
