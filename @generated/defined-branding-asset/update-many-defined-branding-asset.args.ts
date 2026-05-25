import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingAssetUpdateManyMutationInput } from './defined-branding-asset-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedBrandingAssetWhereInput } from './defined-branding-asset-where.input';

@ArgsType()
export class UpdateManyDefinedBrandingAssetArgs {

    @Field(() => DefinedBrandingAssetUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedBrandingAssetUpdateManyMutationInput)
    data!: DefinedBrandingAssetUpdateManyMutationInput;

    @Field(() => DefinedBrandingAssetWhereInput, {nullable:true})
    @Type(() => DefinedBrandingAssetWhereInput)
    where?: DefinedBrandingAssetWhereInput;
}
