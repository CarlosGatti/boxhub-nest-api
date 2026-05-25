import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateWithoutAssetsInput } from './defined-branding-project-create-without-assets.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateOrConnectWithoutAssetsInput } from './defined-branding-project-create-or-connect-without-assets.input';
import { DefinedBrandingProjectUpsertWithoutAssetsInput } from './defined-branding-project-upsert-without-assets.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { DefinedBrandingProjectUpdateToOneWithWhereWithoutAssetsInput } from './defined-branding-project-update-to-one-with-where-without-assets.input';

@InputType()
export class DefinedBrandingProjectUpdateOneRequiredWithoutAssetsNestedInput {

    @Field(() => DefinedBrandingProjectCreateWithoutAssetsInput, {nullable:true})
    @Type(() => DefinedBrandingProjectCreateWithoutAssetsInput)
    create?: DefinedBrandingProjectCreateWithoutAssetsInput;

    @Field(() => DefinedBrandingProjectCreateOrConnectWithoutAssetsInput, {nullable:true})
    @Type(() => DefinedBrandingProjectCreateOrConnectWithoutAssetsInput)
    connectOrCreate?: DefinedBrandingProjectCreateOrConnectWithoutAssetsInput;

    @Field(() => DefinedBrandingProjectUpsertWithoutAssetsInput, {nullable:true})
    @Type(() => DefinedBrandingProjectUpsertWithoutAssetsInput)
    upsert?: DefinedBrandingProjectUpsertWithoutAssetsInput;

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedBrandingProjectUpdateToOneWithWhereWithoutAssetsInput, {nullable:true})
    @Type(() => DefinedBrandingProjectUpdateToOneWithWhereWithoutAssetsInput)
    update?: DefinedBrandingProjectUpdateToOneWithWhereWithoutAssetsInput;
}
