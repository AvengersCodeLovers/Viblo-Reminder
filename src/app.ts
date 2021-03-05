import File from "./utils/file";
import ApiService from "./services/api";
import TimeHelper from "./utils/datetime.utils";
import VibloModule from "./modules/viblo.modules";
import * as dotenv from "dotenv";
import "./utils/logger";
dotenv.config({ path: ".env" });
import { config } from "./config/app.config"

const viblo = new VibloModule(new ApiService(), new TimeHelper(), new File());

viblo.getOrganizationsStatsFromLastMonth(config.GROUP_SLUG);
