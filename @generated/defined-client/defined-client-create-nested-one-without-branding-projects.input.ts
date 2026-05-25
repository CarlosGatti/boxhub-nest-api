import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientCreateWithoutBrandingProjectsInput } from './defined-client-create-without-branding-projects.input';
import { Type } from 'class-transformer';
import { DefinedClientCreateOrConnectWithoutBrandingProjectsInput } from './defined-client-create-or-connect-without-branding-projects.input';
import { Prisma } from '@prisma/client';
import { DefinedClientWhereUniqueInput } from './defined-client-where-unique.input';

@InputType()
export class DefinedClientCreateNestedOneWithoutBrandingProjectsInput {

    @Field(() => DefinedClientCreateWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedClientCreateWithoutBrandingProjectsInput)
    create?: DefinedClientCreateWithoutBrandingProjectsInput;

    @Field(() => DefinedClientCreateOrConnectWithoutBrandingProjectsInput, {nullable:true})
    @Type(() => DefinedClientCreateOrConnectWithoutBrandingProjectsInput)
    connectOrCreate?: DefinedClientCreateOrConnectWithoutBrandingProjectsInput;

    @Field(() => DefinedClientWhereUniqueInput, {nullable:true})
    @Type(() => DefinedClientWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedClientWhereUniqueInput, 'id'>;
}
