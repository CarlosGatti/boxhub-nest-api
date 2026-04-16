import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedProjectStatus } from './defined-project-status.enum';

@InputType()
export class EnumDefinedProjectStatusFieldUpdateOperationsInput {

    @Field(() => DefinedProjectStatus, {nullable:true})
    set?: keyof typeof DefinedProjectStatus;
}
