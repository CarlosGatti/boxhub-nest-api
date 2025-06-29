import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { User } from '../user/user.model';
import { Project } from '../project/project.model';

@ObjectType()
export class MaterialEntry {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    projectId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    supplier!: string;

    @Field(() => Float, {nullable:false})
    quantity!: number;

    @Field(() => Int, {nullable:true})
    receivedById!: number | null;

    @Field(() => Date, {nullable:false})
    receivedAt!: Date;

    @Field(() => String, {nullable:true})
    note!: string | null;

    @Field(() => GraphQLJSON, {nullable:true})
    imageUrls!: any | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => User, {nullable:true})
    receivedBy?: User | null;

    @Field(() => Project, {nullable:false})
    project?: Project;
}
