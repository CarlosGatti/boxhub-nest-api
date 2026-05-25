import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingAssetCreateInput } from './defined-branding-asset-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDefinedBrandingAssetArgs {

    @Field(() => DefinedBrandingAssetCreateInput, {nullable:false})
    @Type(() => DefinedBrandingAssetCreateInput)
    data!: DefinedBrandingAssetCreateInput;
}
