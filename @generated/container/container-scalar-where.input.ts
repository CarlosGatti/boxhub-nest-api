import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ContainerScalarWhereInput {

    @Field(() => [ContainerScalarWhereInput], {nullable:true})
    AND?: Array<ContainerScalarWhereInput>;

    @Field(() => [ContainerScalarWhereInput], {nullable:true})
    OR?: Array<ContainerScalarWhereInput>;

    @Field(() => [ContainerScalarWhereInput], {nullable:true})
    NOT?: Array<ContainerScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    qrCode?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    code?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    storageId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
