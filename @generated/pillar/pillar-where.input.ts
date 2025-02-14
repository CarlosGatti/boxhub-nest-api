import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { ProcessListRelationFilter } from '../process/process-list-relation-filter.input';

@InputType()
export class PillarWhereInput {

    @Field(() => [PillarWhereInput], {nullable:true})
    AND?: Array<PillarWhereInput>;

    @Field(() => [PillarWhereInput], {nullable:true})
    OR?: Array<PillarWhereInput>;

    @Field(() => [PillarWhereInput], {nullable:true})
    NOT?: Array<PillarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => ProcessListRelationFilter, {nullable:true})
    processes?: ProcessListRelationFilter;
}
