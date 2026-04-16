import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DefinedClientUpdateManyMutationInput } from './defined-client-update-many-mutation.input';
import { Type } from 'class-transformer';
import { DefinedClientWhereInput } from './defined-client-where.input';

@ArgsType()
export class UpdateManyDefinedClientArgs {

    @Field(() => DefinedClientUpdateManyMutationInput, {nullable:false})
    @Type(() => DefinedClientUpdateManyMutationInput)
    data!: DefinedClientUpdateManyMutationInput;

    @Field(() => DefinedClientWhereInput, {nullable:true})
    @Type(() => DefinedClientWhereInput)
    where?: DefinedClientWhereInput;
}
