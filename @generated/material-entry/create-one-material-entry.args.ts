import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialEntryCreateInput } from './material-entry-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMaterialEntryArgs {

    @Field(() => MaterialEntryCreateInput, {nullable:false})
    @Type(() => MaterialEntryCreateInput)
    data!: MaterialEntryCreateInput;
}
