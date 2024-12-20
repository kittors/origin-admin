import { resolve } from "node:path";
import { config } from "dotenv";
import { generateApi as generate } from "swagger-typescript-api";

// 加载环境变量
config({ path: resolve(process.cwd(), ".env") });
config({ path: resolve(process.cwd(), ".env.development"), override: true });

const url = process.env.VITE_OPENAPI_URL;
const baseOutputPath = resolve(process.cwd(), 'src/api/modules');

// 生成 API 代码
async function init() {
  if (!url) {
    logger.error("Missing VITE_API_URL in environment variables");
    process.exit(1);
  }

  await generate({
    output: baseOutputPath,
    url: url,
  });
}

init();
