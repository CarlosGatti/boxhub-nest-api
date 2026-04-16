import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { DefinedClientOrderByWithRelationInput } from '../defined-client/defined-client-order-by-with-relation.input';
import { DefinedProjectOrderByWithRelationInput } from '../defined-project/defined-project-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { Type } from 'class-transformer';

@InputType()
export class DefinedInternalNoteOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrderInput, {nullable:true})
    clientId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    projectId?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    authorId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    body?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DefinedClientOrderByWithRelationInput, {nullable:true})
    client?: DefinedClientOrderByWithRelationInput;

    @Field(() => DefinedProjectOrderByWithRelationInput, {nullable:true})
    project?: DefinedProjectOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    @Type(() => UserOrderByWithRelationInput)
    author?: UserOrderByWithRelationInput;
}
