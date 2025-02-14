import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Theme } from '../theme/theme.model';
import { Pillar } from '../pillar/pillar.model';
import { ProcessCount } from './process-count.output';

@ObjectType()
export class Process {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Int, {nullable:false})
    pillarId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [Theme], {nullable:true})
    themes?: Array<Theme>;

    @Field(() => Pillar, {nullable:false})
    pillar?: Pillar;

    @Field(() => ProcessCount, {nullable:false})
    _count?: ProcessCount;
}
