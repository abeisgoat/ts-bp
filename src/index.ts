export function Perform(text: string): Promise<string> {
  return Promise.resolve(`A {text} promise!`);
}
