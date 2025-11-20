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
exports.ConstructionLogCreateManyProjectInputEnvelope = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const construction_log_create_many_project_input_1 = require("./construction-log-create-many-project.input");
const class_transformer_1 = require("class-transformer");
let ConstructionLogCreateManyProjectInputEnvelope = class ConstructionLogCreateManyProjectInputEnvelope {
};
__decorate([
    (0, graphql_1.Field)(() => [construction_log_create_many_project_input_1.ConstructionLogCreateManyProjectInput], { nullable: false }),
    (0, class_transformer_1.Type)(() => construction_log_create_many_project_input_1.ConstructionLogCreateManyProjectInput),
    __metadata("design:type", Array)
], ConstructionLogCreateManyProjectInputEnvelope.prototype, "data", void 0);
__decorate([
    (0, graphql_1.Field)(() => Boolean, { nullable: true }),
    __metadata("design:type", Boolean)
], ConstructionLogCreateManyProjectInputEnvelope.prototype, "skipDuplicates", void 0);
ConstructionLogCreateManyProjectInputEnvelope = __decorate([
    (0, graphql_2.InputType)()
], ConstructionLogCreateManyProjectInputEnvelope);
exports.ConstructionLogCreateManyProjectInputEnvelope = ConstructionLogCreateManyProjectInputEnvelope;
//# sourceMappingURL=construction-log-create-many-project-input-envelope.input.js.map