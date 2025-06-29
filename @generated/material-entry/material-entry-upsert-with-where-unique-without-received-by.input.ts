import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MaterialEntryWhereUniqueInput } from './material-entry-where-unique.input';
import { Type } from 'class-transformer';
import { MaterialEntryUpdateWithoutReceivedByInput } from './material-entry-update-without-received-by.input';
import { MaterialEntryCreateWithoutReceivedByInput } from './material-entry-create-without-received-by.input';

@InputType()
export class MaterialEntryUpsertWithWhereUniqueWithoutReceivedByInput {

    @Field(() => MaterialEntryWhereUniqueInput, {nullable:false})
    @Type(() => MaterialEntryWhereUniqueInput)
    where!: Prisma.AtLeast<MaterialEntryWhereUniqueInput, 'id'>;

    @Field(() => MaterialEntryUpdateWithoutReceivedByInput, {nullable:false})
    @Type(() => MaterialEntryUpdateWithoutReceivedByInput)
    update!: MaterialEntryUpdateWithoutReceivedByInput;

    @Field(() => MaterialEntryCreateWithoutReceivedByInput, {nullable:false})
    @Type(() => MaterialEntryCreateWithoutReceivedByInput)
    create!: MaterialEntryCreateWithoutReceivedByInput;
}
