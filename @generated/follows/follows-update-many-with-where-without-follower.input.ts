import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FollowsScalarWhereInput } from './follows-scalar-where.input';
import { Type } from 'class-transformer';
import { FollowsUpdateManyMutationInput } from './follows-update-many-mutation.input';

@InputType()
export class FollowsUpdateManyWithWhereWithoutFollowerInput {

    @Field(() => FollowsScalarWhereInput, {nullable:false})
    @Type(() => FollowsScalarWhereInput)
    where!: FollowsScalarWhereInput;

    @Field(() => FollowsUpdateManyMutationInput, {nullable:false})
    @Type(() => FollowsUpdateManyMutationInput)
    data!: FollowsUpdateManyMutationInput;
}
