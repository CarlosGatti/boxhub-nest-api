import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StorageMemberScalarWhereInput } from './storage-member-scalar-where.input';
import { Type } from 'class-transformer';
import { StorageMemberUpdateManyMutationInput } from './storage-member-update-many-mutation.input';

@InputType()
export class StorageMemberUpdateManyWithWhereWithoutUserInput {

    @Field(() => StorageMemberScalarWhereInput, {nullable:false})
    @Type(() => StorageMemberScalarWhereInput)
    where!: StorageMemberScalarWhereInput;

    @Field(() => StorageMemberUpdateManyMutationInput, {nullable:false})
    @Type(() => StorageMemberUpdateManyMutationInput)
    data!: StorageMemberUpdateManyMutationInput;
}
