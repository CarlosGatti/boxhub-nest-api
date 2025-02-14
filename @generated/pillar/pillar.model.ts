import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Process } from '../process/process.model';
import { PillarCount } from './pillar-count.output';

@ObjectType()
export class Pillar {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Process], {nullable:true})
    processes?: Array<Process>;

    @Field(() => PillarCount, {nullable:false})
    _count?: PillarCount;
}
