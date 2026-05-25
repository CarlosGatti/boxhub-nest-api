import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectCreateWithoutSectionsInput } from './defined-branding-project-create-without-sections.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateOrConnectWithoutSectionsInput } from './defined-branding-project-create-or-connect-without-sections.input';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';

@InputType()
export class DefinedBrandingProjectCreateNestedOneWithoutSectionsInput {

    @Field(() => DefinedBrandingProjectCreateWithoutSectionsInput, {nullable:true})
    @Type(() => DefinedBrandingProjectCreateWithoutSectionsInput)
    create?: DefinedBrandingProjectCreateWithoutSectionsInput;

    @Field(() => DefinedBrandingProjectCreateOrConnectWithoutSectionsInput, {nullable:true})
    @Type(() => DefinedBrandingProjectCreateOrConnectWithoutSectionsInput)
    connectOrCreate?: DefinedBrandingProjectCreateOrConnectWithoutSectionsInput;

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    connect?: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;
}
