import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MaterialEntryUpdateManyMutationInput } from './material-entry-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MaterialEntryWhereInput } from './material-entry-where.input';

@ArgsType()
export class UpdateManyMaterialEntryArgs {

    @Field(() => MaterialEntryUpdateManyMutationInput, {nullable:false})
    @Type(() => MaterialEntryUpdateManyMutationInput)
    data!: MaterialEntryUpdateManyMutationInput;

    @Field(() => MaterialEntryWhereInput, {nullable:true})
    @Type(() => MaterialEntryWhereInput)
    where?: MaterialEntryWhereInput;
}
