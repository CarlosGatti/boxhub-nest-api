import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DefinedClientWhereInput } from './defined-client-where.input';
import { Type } from 'class-transformer';
import { DefinedClientUpdateWithoutInternalNotesInput } from './defined-client-update-without-internal-notes.input';

@InputType()
export class DefinedClientUpdateToOneWithWhereWithoutInternalNotesInput {

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;

    @Field(() => DefinedClientUpdateWithoutInternalNotesInput, {nullable:false})
    @Type(() => DefinedClientUpdateWithoutInternalNotesInput)
    data!: DefinedClientUpdateWithoutInternalNotesInput;
}
