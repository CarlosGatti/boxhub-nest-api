import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingAssetWhereInput } from './defined-branding-asset-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyDefinedBrandingAssetArgs {

    @Field(() => DefinedBrandingAssetWhereInput, {nullable:true})
    @Type(() => DefinedBrandingAssetWhereInput)
    where?: DefinedBrandingAssetWhereInput;
}
