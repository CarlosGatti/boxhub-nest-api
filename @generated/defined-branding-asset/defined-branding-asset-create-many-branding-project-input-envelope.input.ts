import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingAssetCreateManyBrandingProjectInput } from './defined-branding-asset-create-many-branding-project.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedBrandingAssetCreateManyBrandingProjectInputEnvelope {

    @Field(() => [DefinedBrandingAssetCreateManyBrandingProjectInput], {nullable:false})
    @Type(() => DefinedBrandingAssetCreateManyBrandingProjectInput)
    data!: Array<DefinedBrandingAssetCreateManyBrandingProjectInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
