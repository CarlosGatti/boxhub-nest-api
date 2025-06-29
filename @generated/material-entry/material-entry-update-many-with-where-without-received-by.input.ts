import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MaterialEntryScalarWhereInput } from './material-entry-scalar-where.input';
import { Type } from 'class-transformer';
import { MaterialEntryUpdateManyMutationInput } from './material-entry-update-many-mutation.input';

@InputType()
export class MaterialEntryUpdateManyWithWhereWithoutReceivedByInput {

    @Field(() => MaterialEntryScalarWhereInput, {nullable:false})
    @Type(() => MaterialEntryScalarWhereInput)
    where!: MaterialEntryScalarWhereInput;

    @Field(() => MaterialEntryUpdateManyMutationInput, {nullable:false})
    @Type(() => MaterialEntryUpdateManyMutationInput)
    data!: MaterialEntryUpdateManyMutationInput;
}
