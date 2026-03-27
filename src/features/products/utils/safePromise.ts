type SafeResults<T> =
  | { status: "success"; data: T }
  | { status: "error"; message: string };

export const safePromise = async <T>(promise: Promise<T>): Promise<SafeResults<T>> => {
  try {
    const data = await promise;
    return { status: "success", data };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Something went wrong";
    return { status: "error", message };
  }
};
