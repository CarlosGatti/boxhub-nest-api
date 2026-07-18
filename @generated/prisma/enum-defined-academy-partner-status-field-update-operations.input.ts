import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedAcademyPartnerStatus } from './defined-academy-partner-status.enum';

@InputType()
export class EnumDefinedAcademyPartnerStatusFieldUpdateOperationsInput {

    @Field(() => DefinedAcademyPartnerStatus, {nullable:true})
    set?: keyof typeof DefinedAcademyPartnerStatus;
}
