import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingAssetScalarWhereInput } from './defined-branding-asset-scalar-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingAssetUpdateManyMutationInput } from './defined-branding-asset-update-many-mutation.input';

@InputType()
export class DefinedBrandingAssetUpdateManyWithWhereWithoutBrandingProjectInput {

    @Field(() => DefinedBrandingAssetScalarWhereInput, {nullable:false})
    @Type(() => DefinedBrandingAssetScalarWhereInput)
    where!: DefinedBrandingAssetScalarWhereInput;

    @Field(() => DefinedBrandingAssetUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedBrandingAssetUpdateManyMutationInput)
    data!: DefinedBrandingAssetUpdateManyMutationInput;
}
