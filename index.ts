import "reflect-metadata";

import { Container } from "typedi";
import { AppService } from "@/app/app.service";

const appService = Container.get(AppService);
appService.info();
