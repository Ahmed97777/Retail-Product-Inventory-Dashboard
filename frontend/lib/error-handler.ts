import { AxiosError } from "axios";

export function getErrorMessage(error: unknown, fallback: string): string {
  if (error instanceof AxiosError) {
    const message = error.response?.data?.message;
    return typeof message === "string" ? message : fallback;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return fallback;
}
