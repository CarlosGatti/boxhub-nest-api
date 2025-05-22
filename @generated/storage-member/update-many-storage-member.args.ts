import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StorageMemberUpdateManyMutationInput } from './storage-member-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StorageMemberWhereInput } from './storage-member-where.input';

@ArgsType()
export class UpdateManyStorageMemberArgs {

    @Field(() => StorageMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => StorageMemberUpdateManyMutationInput)
    data!: StorageMemberUpdateManyMutationInput;

    @Field(() => StorageMemberWhereInput, {nullable:true})
    @Type(() => StorageMemberWhereInput)
    where?: StorageMemberWhereInput;
}
