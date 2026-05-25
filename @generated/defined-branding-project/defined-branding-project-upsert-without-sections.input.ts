import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectUpdateWithoutSectionsInput } from './defined-branding-project-update-without-sections.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectCreateWithoutSectionsInput } from './defined-branding-project-create-without-sections.input';
import { DefinedBrandingProjectWhereInput } from './defined-branding-project-where.input';

@InputType()
export class DefinedBrandingProjectUpsertWithoutSectionsInput {

    @Field(() => DefinedBrandingProjectUpdateWithoutSectionsInput, {nullable:false})
    @Type(() => DefinedBrandingProjectUpdateWithoutSectionsInput)
    update!: DefinedBrandingProjectUpdateWithoutSectionsInput;

    @Field(() => DefinedBrandingProjectCreateWithoutSectionsInput, {nullable:false})
    @Type(() => DefinedBrandingProjectCreateWithoutSectionsInput)
    create!: DefinedBrandingProjectCreateWithoutSectionsInput;

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereInput)
    where?: DefinedBrandingProjectWhereInput;
}
