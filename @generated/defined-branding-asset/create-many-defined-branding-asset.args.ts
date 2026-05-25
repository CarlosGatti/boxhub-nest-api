import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedBrandingAssetCreateManyInput } from './defined-branding-asset-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDefinedBrandingAssetArgs {

    @Field(() => [DefinedBrandingAssetCreateManyInput], {nullable:false})
    @Type(() => DefinedBrandingAssetCreateManyInput)
    data!: Array<DefinedBrandingAssetCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
