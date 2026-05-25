import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectUpdateWithoutAssetsInput } from './defined-branding-project-update-without-assets.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateWithoutAssetsInput } from './defined-branding-project-create-without-assets.input';
import { DefinedBrandingProjectWhereInput } from './defined-branding-project-where.input';

@InputType()
export class DefinedBrandingProjectUpsertWithoutAssetsInput {

    @Field(() => DefinedBrandingProjectUpdateWithoutAssetsInput, {nullable:false})
    @Type(() => DefinedBrandingProjectUpdateWithoutAssetsInput)
    update!: DefinedBrandingProjectUpdateWithoutAssetsInput;

    @Field(() => DefinedBrandingProjectCreateWithoutAssetsInput, {nullable:false})
    @Type(() => DefinedBrandingProjectCreateWithoutAssetsInput)
    create!: DefinedBrandingProjectCreateWithoutAssetsInput;

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereInput)
    where?: DefinedBrandingProjectWhereInput;
}
