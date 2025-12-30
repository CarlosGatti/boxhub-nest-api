import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class PortfolioScalarWhereInput {

    @Field(() => [PortfolioScalarWhereInput], {nullable:true})
    AND?: Array<PortfolioScalarWhereInput>;

    @Field(() => [PortfolioScalarWhereInput], {nullable:true})
    OR?: Array<PortfolioScalarWhereInput>;

    @Field(() => [PortfolioScalarWhereInput], {nullable:true})
    NOT?: Array<PortfolioScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    baseCurrency?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
