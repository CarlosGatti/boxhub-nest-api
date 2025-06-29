import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialEntryWhereInput } from './material-entry-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMaterialEntryArgs {

    @Field(() => MaterialEntryWhereInput, {nullable:true})
    @Type(() => MaterialEntryWhereInput)
    where?: MaterialEntryWhereInput;
}
