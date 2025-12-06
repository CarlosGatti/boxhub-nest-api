import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppUpdateManyMutationInput } from './app-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AppWhereInput } from './app-where.input';

@ArgsType()
export class UpdateManyAppArgs {

    @Field(() => AppUpdateManyMutationInput, {nullable:false})
    @Type(() => AppUpdateManyMutationInput)
    data!: AppUpdateManyMutationInput;

    @Field(() => AppWhereInput, {nullable:true})
    @Type(() => AppWhereInput)
    where?: AppWhereInput;
}
