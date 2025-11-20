"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstructionLogUpdateManyWithoutProjectNestedInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const construction_log_create_without_project_input_1 = require("./construction-log-create-without-project.input");
const class_transformer_1 = require("class-transformer");
const construction_log_create_or_connect_without_project_input_1 = require("./construction-log-create-or-connect-without-project.input");
const construction_log_upsert_with_where_unique_without_project_input_1 = require("./construction-log-upsert-with-where-unique-without-project.input");
const construction_log_create_many_project_input_envelope_input_1 = require("./construction-log-create-many-project-input-envelope.input");
const construction_log_where_unique_input_1 = require("./construction-log-where-unique.input");
const construction_log_update_with_where_unique_without_project_input_1 = require("./construction-log-update-with-where-unique-without-project.input");
const construction_log_update_many_with_where_without_project_input_1 = require("./construction-log-update-many-with-where-without-project.input");
const construction_log_scalar_where_input_1 = require("./construction-log-scalar-where.input");
let ConstructionLogUpdateManyWithoutProjectNestedInput = class ConstructionLogUpdateManyWithoutProjectNestedInput {
};
__decorate([
    (0, graphql_1.Field)(() => [construction_log_create_without_project_input_1.ConstructionLogCreateWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_create_without_project_input_1.ConstructionLogCreateWithoutProjectInput),
    __metadata("design:type", Array)
], ConstructionLogUpdateManyWithoutProjectNestedInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_create_or_connect_without_project_input_1.ConstructionLogCreateOrConnectWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_create_or_connect_without_project_input_1.ConstructionLogCreateOrConnectWithoutProjectInput),
    __metadata("design:type", Array)
], ConstructionLogUpdateManyWithoutProjectNestedInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_upsert_with_where_unique_without_project_input_1.ConstructionLogUpsertWithWhereUniqueWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_upsert_with_where_unique_without_project_input_1.ConstructionLogUpsertWithWhereUniqueWithoutProjectInput),
    __metadata("design:type", Array)
], ConstructionLogUpdateManyWithoutProjectNestedInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_create_many_project_input_envelope_input_1.ConstructionLogCreateManyProjectInputEnvelope, { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_create_many_project_input_envelope_input_1.ConstructionLogCreateManyProjectInputEnvelope),
    __metadata("design:type", construction_log_create_many_project_input_envelope_input_1.ConstructionLogCreateManyProjectInputEnvelope)
], ConstructionLogUpdateManyWithoutProjectNestedInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput),
    __metadata("design:type", Array)
], ConstructionLogUpdateManyWithoutProjectNestedInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput),
    __metadata("design:type", Array)
], ConstructionLogUpdateManyWithoutProjectNestedInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput),
    __metadata("design:type", Array)
], ConstructionLogUpdateManyWithoutProjectNestedInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput),
    __metadata("design:type", Array)
], ConstructionLogUpdateManyWithoutProjectNestedInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_update_with_where_unique_without_project_input_1.ConstructionLogUpdateWithWhereUniqueWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_update_with_where_unique_without_project_input_1.ConstructionLogUpdateWithWhereUniqueWithoutProjectInput),
    __metadata("design:type", Array)
], ConstructionLogUpdateManyWithoutProjectNestedInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_update_many_with_where_without_project_input_1.ConstructionLogUpdateManyWithWhereWithoutProjectInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_update_many_with_where_without_project_input_1.ConstructionLogUpdateManyWithWhereWithoutProjectInput),
    __metadata("design:type", Array)
], ConstructionLogUpdateManyWithoutProjectNestedInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [construction_log_scalar_where_input_1.ConstructionLogScalarWhereInput], { nullable: true }),
    (0, class_transformer_1.Type)(() => construction_log_scalar_where_input_1.ConstructionLogScalarWhereInput),
    __metadata("design:type", Array)
], ConstructionLogUpdateManyWithoutProjectNestedInput.prototype, "deleteMany", void 0);
ConstructionLogUpdateManyWithoutProjectNestedInput = __decorate([
    (0, graphql_2.InputType)()
], ConstructionLogUpdateManyWithoutProjectNestedInput);
exports.ConstructionLogUpdateManyWithoutProjectNestedInput = ConstructionLogUpdateManyWithoutProjectNestedInput;
//# sourceMappingURL=construction-log-update-many-without-project-nested.input.js.map