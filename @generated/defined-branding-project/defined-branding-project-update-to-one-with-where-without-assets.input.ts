import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectWhereInput } from './defined-branding-project-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectUpdateWithoutAssetsInput } from './defined-branding-project-update-without-assets.input';

@InputType()
export class DefinedBrandingProjectUpdateToOneWithWhereWithoutAssetsInput {

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereInput)
    where?: DefinedBrandingProjectWhereInput;

    @Field(() => DefinedBrandingProjectUpdateWithoutAssetsInput, {nullable:false})
    @Type(() => DefinedBrandingProjectUpdateWithoutAssetsInput)
    data!: DefinedBrandingProjectUpdateWithoutAssetsInput;
}
