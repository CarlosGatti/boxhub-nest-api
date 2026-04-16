import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DefinedClient } from '../defined-client/defined-client.model';
import { DefinedProject } from '../defined-project/defined-project.model';
import { User } from '../user/user.model';

@ObjectType()
export class DefinedInternalNote {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    clientId!: number | null;

    @Field(() => Int, {nullable:true})
    projectId!: number | null;

    @Field(() => Int, {nullable:false})
    authorId!: number;

    @Field(() => String, {nullable:false})
    body!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DefinedClient, {nullable:true})
    client?: DefinedClient | null;

    @Field(() => DefinedProject, {nullable:true})
    project?: DefinedProject | null;

    @Field(() => User, {nullable:false})
    author?: User;
}
