import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ProcessUpdateManyMutationInput } from './process-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ProcessWhereInput } from './process-where.input';

@ArgsType()
export class UpdateManyProcessArgs {

    @Field(() => ProcessUpdateManyMutationInput, {nullable:false})
    @Type(() => ProcessUpdateManyMutationInput)
    data!: ProcessUpdateManyMutationInput;

    @Field(() => ProcessWhereInput, {nullable:true})
    @Type(() => ProcessWhereInput)
    where?: ProcessWhereInput;
}
