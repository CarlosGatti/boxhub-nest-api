import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutBrandingProjectsInput } from './defined-client-create-without-branding-projects.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutBrandingProjectsInput } from './defined-client-create-or-connect-without-branding-projects.input';
import { DefinedClientUpsertWithoutBrandingProjectsInput } from './defined-client-upsert-without-branding-projects.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';
import { DefinedClientUpdateToOneWithWhereWithoutBrandingProjectsInput } from './defined-client-update-to-one-with-where-without-branding-projects.input';

@InputType()
export class DefinedClientUpdateOneRequiredWithoutBrandingProjectsNestedInput {

    @Field(() => DefinedClientCreateWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutBrandingProjectsInput)
    create?: DefinedClientCreateWithoutBrandingProjectsInput;

    @Field(() => DefinedClientCreateOrConnectWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutBrandingProjectsInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutBrandingProjectsInput;

    @Field(() => DefinedClientUpsertWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedClientUpsertWithoutBrandingProjectsInput)
    upsert?: DefinedClientUpsertWithoutBrandingProjectsInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;

    @Field(() => DefinedClientUpdateToOneWithWhereWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedClientUpdateToOneWithWhereWithoutBrandingProjectsInput)
    update?: DefinedClientUpdateToOneWithWhereWithoutBrandingProjectsInput;
}
