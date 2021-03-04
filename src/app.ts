import ApiService from "./services/api";
import TimeHelper from "./utils/datetime.utils";
import VibloModule from "./modules/viblo.modules";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

const viblo = new VibloModule(new ApiService(), new TimeHelper());

viblo.getOrganizationsStatsFromLastMonth("avengers-group");
