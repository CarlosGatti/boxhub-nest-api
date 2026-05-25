import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectWhereInput } from './defined-branding-project-where.input';
import { Type } from 'class-transformer';
import { DefinedBrandingProjectUpdateWithoutSectionsInput } from './defined-branding-project-update-without-sections.input';

@InputType()
export class DefinedBrandingProjectUpdateToOneWithWhereWithoutSectionsInput {

    @Field(() => DefinedBrandingProjectWhereInput, {nullable:true})
    @Type(() => DefinedBrandingProjectWhereInput)
    where?: DefinedBrandingProjectWhereInput;

    @Field(() => DefinedBrandingProjectUpdateWithoutSectionsInput, {nullable:false})
    @Type(() => DefinedBrandingProjectUpdateWithoutSectionsInput)
    data!: DefinedBrandingProjectUpdateWithoutSectionsInput;
}
