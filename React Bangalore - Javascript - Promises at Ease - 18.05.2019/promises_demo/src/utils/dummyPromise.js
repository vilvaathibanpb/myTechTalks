export const randomPromise = (i, success) => {
  return new Promise((resolve, reject) =>
    setTimeout(() => {
      if (success) resolve(i);
      else reject(i);
    }, Math.random() * 900)
  );
};
