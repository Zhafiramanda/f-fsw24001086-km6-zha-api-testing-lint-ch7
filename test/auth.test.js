const request = require("supertest");
const app = require("../app/index");

const { User, Role } = require("../app/models");

describe("Test Auth: v1/auth/login");
