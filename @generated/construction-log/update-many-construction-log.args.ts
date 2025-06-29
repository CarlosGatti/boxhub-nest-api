import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ConstructionLogUpdateManyMutationInput } from './construction-log-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ConstructionLogWhereInput } from './construction-log-where.input';

@ArgsType()
export class UpdateManyConstructionLogArgs {

    @Field(() => ConstructionLogUpdateManyMutationInput, {nullable:false})
    @Type(() => ConstructionLogUpdateManyMutationInput)
    data!: ConstructionLogUpdateManyMutationInput;

    @Field(() => ConstructionLogWhereInput, {nullable:true})
    @Type(() => ConstructionLogWhereInput)
    where?: ConstructionLogWhereInput;
}
