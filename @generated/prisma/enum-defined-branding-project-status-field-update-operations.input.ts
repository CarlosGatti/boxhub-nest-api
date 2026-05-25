import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedBrandingProjectStatus } from './defined-branding-project-status.enum';

@InputType()
export class EnumDefinedBrandingProjectStatusFieldUpdateOperationsInput {

    @Field(() => DefinedBrandingProjectStatus, {nullable:true})
    set?: keyof typeof DefinedBrandingProjectStatus;
}
