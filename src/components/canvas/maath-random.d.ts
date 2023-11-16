declare module "maath/random/dist/maath-random.esm" {
  interface Random {
    inSphere(array: Float32Array, options: { radius: number }): void;
    // Add other missing properties here if needed
  }

  const random: Random;
  export default random;
}
