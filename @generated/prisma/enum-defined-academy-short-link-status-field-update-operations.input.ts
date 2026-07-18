import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyShortLinkStatus } from './defined-academy-short-link-status.enum';

@InputType()
export class EnumDefinedAcademyShortLinkStatusFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyShortLinkStatus, {nullable:true})
    set?: keyof typeof DefinedAcademyShortLinkStatus;
}
