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
exports.ConstructionLogUpsertWithWhereUniqueWithoutProjectInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const client_1 = require("@prisma/client");
const construction_log_where_unique_input_1 = require("./construction-log-where-unique.input");
const class_transformer_1 = require("class-transformer");
const construction_log_update_without_project_input_1 = require("./construction-log-update-without-project.input");
const construction_log_create_without_project_input_1 = require("./construction-log-create-without-project.input");
let ConstructionLogUpsertWithWhereUniqueWithoutProjectInput = class ConstructionLogUpsertWithWhereUniqueWithoutProjectInput {
};
__decorate([
    (0, graphql_1.Field)(() => construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => construction_log_where_unique_input_1.ConstructionLogWhereUniqueInput),
    __metadata("design:type", Object)
], ConstructionLogUpsertWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_update_without_project_input_1.ConstructionLogUpdateWithoutProjectInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => construction_log_update_without_project_input_1.ConstructionLogUpdateWithoutProjectInput),
    __metadata("design:type", construction_log_update_without_project_input_1.ConstructionLogUpdateWithoutProjectInput)
], ConstructionLogUpsertWithWhereUniqueWithoutProjectInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => construction_log_create_without_project_input_1.ConstructionLogCreateWithoutProjectInput, { nullable: false }),
    (0, class_transformer_1.Type)(() => construction_log_create_without_project_input_1.ConstructionLogCreateWithoutProjectInput),
    __metadata("design:type", construction_log_create_without_project_input_1.ConstructionLogCreateWithoutProjectInput)
], ConstructionLogUpsertWithWhereUniqueWithoutProjectInput.prototype, "create", void 0);
ConstructionLogUpsertWithWhereUniqueWithoutProjectInput = __decorate([
    (0, graphql_2.InputType)()
], ConstructionLogUpsertWithWhereUniqueWithoutProjectInput);
exports.ConstructionLogUpsertWithWhereUniqueWithoutProjectInput = ConstructionLogUpsertWithWhereUniqueWithoutProjectInput;
//# sourceMappingURL=construction-log-upsert-with-where-unique-without-project.input.js.map