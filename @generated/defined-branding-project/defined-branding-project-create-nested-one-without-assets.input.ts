import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateWithoutAssetsInput } from './defined-branding-project-create-without-assets.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateOrConnectWithoutAssetsInput } from './defined-branding-project-create-or-connect-without-assets.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';

@InputType()
export class DefinedBrandingProjectCreateNestedOneWithoutAssetsInput {

    @Field(() => DefinedBrandingProjectCreateWithoutAssetsInput, {nullable:true})
    @Type(() => DefinedBrandingProjectCreateWithoutAssetsInput)
    create?: DefinedBrandingProjectCreateWithoutAssetsInput;

    @Field(() => DefinedBrandingProjectCreateOrConnectWithoutAssetsInput, {nullable:true})
    @Type(() => DefinedBrandingProjectCreateOrConnectWithoutAssetsInput)
    connectOrCreate?: DefinedBrandingProjectCreateOrConnectWithoutAssetsInput;

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;
}
