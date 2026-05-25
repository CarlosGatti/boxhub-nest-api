import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { DefinedBrandingProjectWhereUniqueInput } from './defined-branding-project-where-unique.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateWithoutSectionsInput } from './defined-branding-project-create-without-sections.input';

@InputType()
export class DefinedBrandingProjectCreateOrConnectWithoutSectionsInput {

    @Field(() => DefinedBrandingProjectWhereUniqueInput, {nullable:false})
    @Type(() => DefinedBrandingProjectWhereUniqueInput)
    where!: Prisma.AtLeast<DefinedBrandingProjectWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => DefinedBrandingProjectCreateWithoutSectionsInput, {nullable:false})
    @Type(() => DefinedBrandingProjectCreateWithoutSectionsInput)
    create!: DefinedBrandingProjectCreateWithoutSectionsInput;
}
