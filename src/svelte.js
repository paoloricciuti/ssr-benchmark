import { handler } from "svelte-benchmark/build/handler.js";
import { handler as handlerv5 } from "svelte-v5-benchmark/build/handler.js";

export async function buildSveltekitHandler() {
  return handler;
}

export async function buildSveltekitv5Handler() {
	return handlerv5;
  }
  